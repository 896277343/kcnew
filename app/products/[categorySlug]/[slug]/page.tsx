import { Article, Container, Prose } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductCategoryNav } from "@/components/products/product-category-nav";
import { ProductGallery } from "@/components/products/product-gallery";
import { stripHtml } from "@/lib/metadata";
import { getProductGalleryImages } from "@/lib/product-gallery";
import { getAllCategories, getPostBySlug, getPostsPaginated } from "@/lib/wordpress";
import type { Post } from "@/lib/wordpress.d";
import { siteConfig } from "@/site.config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "auto";
export const revalidate = 3600;

function getPostImageUrl(post: Post): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; slug: string }>;
}): Promise<Metadata> {
  const { categorySlug, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered);
  const path = `/products/${categorySlug}/${post.slug}`;

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", title);
  ogUrl.searchParams.append("description", description);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.site_domain}${path}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ categorySlug: string; slug: string }>;
}) {
  const { categorySlug, slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) {
    notFound();
  }

  const embeddedCategories = post._embedded?.["wp:term"]?.[0] ?? [];
  const inCategory = embeddedCategories.some((c) => c.id === category.id);
  if (!inCategory) {
    notFound();
  }

  const title = stripHtml(post.title.rendered);
  const heroImageUrl = getPostImageUrl(post);
  const galleryImages = getProductGalleryImages({
    title,
    fallbackImages: heroImageUrl ? [heroImageUrl] : [],
  });

  const categoryPostsResponse = await getPostsPaginated(1, 60, {
    category: String(category.id),
  });
  const categoryPosts = categoryPostsResponse.data
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentIndex = categoryPosts.findIndex((p) => p.id === post.id);
  const nextPost = currentIndex >= 0 ? categoryPosts[currentIndex - 1] : undefined;
  const prevPost = currentIndex >= 0 ? categoryPosts[currentIndex + 1] : undefined;

  const related = categoryPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main>
      <section className="relative h-56 md:h-72 bg-slate-950 text-white overflow-hidden">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
        )}
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          <div className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>{" "}
            <span className="mx-2">/</span>
            <Link
              href={`/products/${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.name}
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-white/90">{title}</span>
          </div>
        </Container>
      </section>

      <section className="bg-black">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <ProductGallery images={galleryImages} />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white">
              {(prevPost || nextPost) && (
                <div className="mb-6 flex items-center justify-between gap-4">
                  {prevPost ? (
                    <Link
                      href={`/products/${category.slug}/${prevPost.slug}`}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      title={stripHtml(prevPost.title?.rendered || "Untitled")}
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span />
                  )}
                  {nextPost ? (
                    <Link
                      href={`/products/${category.slug}/${nextPost.slug}`}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      title={stripHtml(nextPost.title?.rendered || "Untitled")}
                    >
                      Next →
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>
              )}

              <h2 className="text-2xl font-semibold">Send Inquiry</h2>
              <form className="mt-6 space-y-4">
                <Input placeholder="*Full Name" required />
                <Input placeholder="*Email" type="email" required />
                <Input placeholder="Phone" />
                <Input placeholder="Country" required />
                <Textarea placeholder="*How Can We Help You?" rows={6} required />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                >
                  Submit
                </Button>
              </form>

              <div className="mt-8 border-t border-white/10 pt-6 space-y-2 text-sm text-white/80">
                <p>Tel：0086-371-60983870</p>
                <p>Mobile：+86 18937640479</p>
                <p>Email：info@gslipai.com</p>
                <p>
                  Add: No. 101, 1St Floor, Unit 1, Building 72, International Medical
                  Industrial Park, North Of Wutong Road, East Of Nuanquan Road, Xuedian
                  Town, Xinzheng, Zhengzhou, Henan, China
                </p>
              </div>

              {related.length > 0 && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white/90">Related Products</h3>
                  <div className="mt-4 grid gap-3">
                    {related.map((p) => {
                      const pTitle = stripHtml(p.title?.rendered || "Untitled");
                      const pImage = getPostImageUrl(p);
                      return (
                        <Link
                          key={p.id}
                          href={`/products/${category.slug}/${p.slug}`}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3"
                          title={pTitle}
                        >
                          <div className="h-14 w-14 overflow-hidden rounded-md bg-white flex items-center justify-center">
                            {pImage ? (
                              <Image
                                src={pImage}
                                alt={pTitle}
                                width={120}
                                height={120}
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              <div className="h-full w-full bg-slate-100" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-white/80 truncate">{pTitle}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-14 md:mt-18 grid gap-10 lg:grid-cols-[1fr_320px] items-start">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 text-white">
              <Prose className="text-white [&_a]:text-blue-300 [&_a]:decoration-blue-300/40">
                <h2>Product Overview</h2>
                {post.excerpt?.rendered && (
                  <p className="text-white/80">{stripHtml(post.excerpt.rendered)}</p>
                )}
              </Prose>
              <Article
                className="text-white [&_a]:text-blue-300 [&_a]:decoration-blue-300/40"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            <ProductCategoryNav currentSlug={categorySlug} />
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 border-t border-white/10">
        <Container className="py-14 md:py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Need A One-stop Solution?
              </h2>
              <p className="mt-2 text-white/70">
                Let us know your requirement and we&apos;ll propose the right setup.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Let us know your requirement
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

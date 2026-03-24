import { Container } from "@/components/craft";
import { getAllCategories, getPostsPaginated } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import type { Post } from "@/lib/wordpress.d";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "auto";
export const revalidate = 3600;

function getPostImageUrl(post: Post): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const postsResponse = await getPostsPaginated(1, 60, {
    category: String(category.id),
  });
  const posts = postsResponse.data;

  const heroImageUrl = posts.map(getPostImageUrl).find(Boolean) ?? null;

  return (
    <main>
      <section className="relative h-56 md:h-72 bg-slate-950 text-white overflow-hidden">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt={category.name}
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
            {category.name}
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
            <span className="text-white/90">{category.name}</span>
          </div>
        </Container>
      </section>

      <section className="bg-black">
        <Container className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
            Types of {category.name} for sale
          </h2>

          {posts.length > 0 ? (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const imageUrl = getPostImageUrl(post);
                const title = stripHtml(post.title?.rendered || "Untitled");
                return (
                  <Link
                    key={post.id}
                    href={`/products/${category.slug}/${post.slug}`}
                    className="block rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
                  >
                    <div className="bg-white">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={title}
                          width={900}
                          height={700}
                          className="w-full h-64 object-contain"
                        />
                      ) : (
                        <div className="h-64 w-full bg-slate-100" />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white/90 line-clamp-2">
                        {title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white">
              <h3 className="text-2xl font-semibold">No Products Found</h3>
              <p className="mt-3 text-white/70">
                Add posts to this category in WordPress.
              </p>
            </div>
          )}
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

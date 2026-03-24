import { Container } from "@/components/craft";
import { getAllCategories, getPostsPaginated } from "@/lib/wordpress";
import { stripHtml } from "@/lib/metadata";
import type { Post, Category } from "@/lib/wordpress.d";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "auto";
export const revalidate = 3600;

function getPostImageUrl(post: Post): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export default async function ProductsPage() {
  const categories = await getAllCategories();
  const parentCategories = categories.filter((cat) => cat.parent === 0 && cat.count > 0);

  const heroPosts = await getPostsPaginated(1, 1);
  const heroImageUrl = heroPosts.data[0] ? getPostImageUrl(heroPosts.data[0]) : null;

  const sections: Array<{
    category: Category;
    posts: Post[];
    imageUrl: string | null;
  }> = await Promise.all(
    parentCategories.map(async (category) => {
      const postsResponse = await getPostsPaginated(1, 10, {
        category: String(category.id),
      });

      const posts = postsResponse.data;
      const imageUrl = posts.map(getPostImageUrl).find(Boolean) ?? null;

      return { category, posts, imageUrl };
    })
  );

  return (
    <main>
      <section className="relative h-56 md:h-72 bg-slate-950 text-white overflow-hidden">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt="Products"
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
            Products
          </h1>
          <div className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-white/90">Products</span>
          </div>
        </Container>
      </section>

      {sections.length > 0 ? (
        <div className="bg-black">
          {sections.map(({ category, posts, imageUrl }) => (
            <section key={category.id} className="border-t border-white/10">
              <Container className="py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-[420px_1fr] items-start">
                  <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={category.name}
                        width={900}
                        height={700}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <div className="aspect-[4/3] w-full rounded-xl bg-slate-100" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                      {category.name}
                    </h2>
                    <div className="mt-4 h-px bg-white/15" />

                    {posts.length > 0 ? (
                      <ul className="mt-6 space-y-3">
                        {posts.map((post) => (
                          <li key={post.id} className="min-w-0">
                            <Link
                              href={`/products/${category.slug}/${post.slug}`}
                              className="block text-white/65 hover:text-white transition-colors truncate"
                              title={stripHtml(post.title?.rendered || "Untitled")}
                            >
                              {stripHtml(post.title?.rendered || "Untitled")}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-6 text-white/60">
                        No products found in this category.
                      </p>
                    )}

                    <div className="mt-8">
                      <Link
                        href={`/products/${category.slug}`}
                        className="inline-flex items-center gap-3 rounded-md bg-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-500 transition-colors"
                      >
                        Read More <span aria-hidden="true">—</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          ))}
        </div>
      ) : (
        <section className="bg-black">
          <Container className="py-20">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white">
              <h2 className="text-2xl font-semibold">No Products Found</h2>
              <p className="mt-3 text-white/70">
                Configure WordPress or add product categories and posts.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-500 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-slate-950 border-t border-white/10">
        <Container className="py-14 md:py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Need a one-stop solution?
              </h2>
              <p className="mt-2 text-white/70">
                Tell us your application and requirements. We&apos;ll propose the right
                induction heating setup.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Let us know your needs
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

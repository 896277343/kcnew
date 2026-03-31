import { Container } from "@/components/craft";
import { productsCatalog } from "@/lib/products-catalog";
import defaultProductImage from "@/pics/products/Medium Frequency Induction Heating Equipment.jpg";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "auto";
export const revalidate = 3600;

export default async function ProductsPage() {
  const heroImage = productsCatalog[0]?.image || defaultProductImage;

  return (
    <main>
      <section className="relative h-56 md:h-72 bg-slate-950 text-white overflow-hidden">
        <Image
          src={heroImage}
          alt="Products"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative h-full flex flex-col justify-center max-w-6xl">
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

      {productsCatalog.length > 0 ? (
        <div className="bg-black">
          {productsCatalog.map((category, categoryIndex) => (
            <section key={category.slug} className="border-t border-white/10">
              <Container className="py-12 md:py-16 max-w-6xl">
                <div className="rounded-2xl bg-[#0b0f14] border border-white/10 p-6 md:p-10">
                  <div className="grid gap-10 md:grid-cols-[420px_1fr] items-start">
                    <div className="rounded-2xl bg-white p-4 md:p-6 shadow-2xl border-4 border-white/50">
                      <div className="aspect-[4/3] w-full rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={900}
                          height={700}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="min-w-0 text-white">
                      <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                        {category.name}
                      </h2>
                      <div className="mt-4 h-px bg-white/15" />

                      {category.products.length > 0 ? (
                        <>
                          <ul className="mt-6 space-y-3">
                            {category.products.map((p) => (
                              <li key={p.href} className="min-w-0">
                                <Link
                                  href={p.href}
                                  className="block text-white/70 hover:text-white transition-colors leading-relaxed"
                                  title={p.title}
                                >
                                  {p.title}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.products.slice(0, 3).map((p) => {
                              return (
                                <Link
                                  key={p.href}
                                  href={p.href}
                                  className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
                                  title={p.title}
                                >
                                  <div className="bg-white">
                                    <Image
                                      src={p.image}
                                      alt={p.title}
                                      width={600}
                                      height={450}
                                      className="w-full h-32 object-contain"
                                    />
                                  </div>
                                  <div className="p-4">
                                    <p className="text-sm font-medium text-white/85 line-clamp-2">
                                      {p.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <p className="mt-6 text-white/60">
                          No products found in this category.
                        </p>
                      )}

                      <div className="mt-8">
                        <Link
                          href={`/products/${category.slug}`}
                          className="inline-flex items-center gap-3 rounded-md bg-[#3b6b84] px-6 py-3 font-semibold text-white hover:bg-[#457a96] transition-colors"
                        >
                          Read More <span aria-hidden="true">—</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          ))}
        </div>
      ) : (
        <section className="bg-black">
          <Container className="py-20 max-w-6xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white">
              <h2 className="text-2xl font-semibold">No Products Found</h2>
              <p className="mt-3 text-white/70">
                Add product categories and products.
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
        <Container className="py-14 md:py-16 max-w-6xl">
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

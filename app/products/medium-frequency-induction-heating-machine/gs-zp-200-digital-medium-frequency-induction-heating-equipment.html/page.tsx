import { Container, Prose } from "@/components/craft";
import { ProductCategoryNav } from "@/components/products/product-category-nav";
import { ProductGallery } from "@/components/products/product-gallery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getProductGalleryImages } from "@/lib/product-gallery";
import productImage from "@/pics/products/Medium Frequency Induction Heating Equipment-2.jpg";
import productImageAlt from "@/pics/products/Medium Frequency Induction Heating Equipment.jpg";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

const product = {
  category: {
    name: "Medium Frequency Induction Heating Machine",
    slug: "medium-frequency-induction-heating-machine",
  },
  title: "GS-ZP-200 Digital Medium Frequency Induction Heating Equipment",
  code: "GS-ZP-200",
  summary:
    "Digital medium-frequency induction heating equipment designed for forging and heat treatment with stable performance and precise control.",
} as const;

const relatedProducts = [
  {
    title: "120KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/120kw-medium-frequency-induction-heating-machine.html",
    summary: "Compact and efficient medium-frequency equipment for general metal heating processes.",
  },
  {
    title: "300KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/300kw-medium-frequency-induction-heating-machine.html",
    summary: "A practical solution for customers who need stronger output and stable heating performance.",
  },
  {
    title: "800KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/800kw-medium-frequency-induction-heating-machine.html",
    summary: "Designed for higher-capacity production environments with dependable process control.",
  },
];

export const metadata: Metadata = {
  title: product.title,
  description: product.summary,
  alternates: {
    canonical: `/products/${product.category.slug}/gs-zp-200-digital-medium-frequency-induction-heating-equipment.html`,
  },
};

export default function Page() {
  const galleryImages = getProductGalleryImages({
    title: product.title,
    fallbackImages: [productImage, productImageAlt, productImage],
  });

  return (
    <main>
      <section className="relative h-32 md:h-40 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative h-full flex flex-col justify-center">
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-[13px] leading-6 text-white/60 backdrop-blur-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2 text-white/25">•</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>{" "}
            <span className="mx-2 text-white/25">•</span>
            <Link
              href={`/products/${product.category.slug}`}
              className="hover:text-white transition-colors"
            >
              {product.category.name}
            </Link>{" "}
            <span className="mx-2 text-white/25">•</span>
            <span className="inline-block max-w-[420px] truncate align-bottom font-semibold text-blue-300">
              {product.title}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-black">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-stretch">
            <ProductGallery images={galleryImages} />

            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Product Overview
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                {product.title}
              </h1>
              <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/80">
                Model: {product.code}
              </div>
              <p className="mt-6 text-white/75 leading-8">{product.summary}</p>

              <div className="mt-auto pt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white h-11 px-6">
                  <a href="#inquiry">Send Inquiry</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="#technical-details">View Details</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-18 grid gap-10 lg:grid-cols-[1fr_320px] items-start">
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 text-white">
                <div id="technical-details">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Technical Details
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    Key technical information
                  </h2>
                  <p className="mt-4 max-w-3xl text-white/70 leading-8">
                    Final technical configuration should be confirmed according to your
                    workpiece material, target temperature, heating time, and production
                    rhythm. The overview below is intended to help customers evaluate the
                    application direction of this model.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                    {[
                      ["Product model", product.code],
                      ["Equipment type", "Digital medium frequency induction heating equipment"],
                      ["Typical use", "Forging and heat treatment applications"],
                      ["Control focus", "Stable output and precise process adjustment"],
                      ["Customization", "Available based on part size and process target"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="grid border-b border-white/10 bg-white/4 last:border-b-0 md:grid-cols-[220px_1fr]"
                      >
                        <div className="bg-white/6 px-5 py-4 text-sm font-medium text-white/75">
                          {label}
                        </div>
                        <div className="px-5 py-4 text-white/90">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Applications
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">Typical application scenarios</h3>
                    <div className="mt-6 space-y-4">
                      {[
                        {
                          index: "01",
                          title: "Forging preheating",
                          text: "Suitable for preparing metal stock before forging with stable and efficient heat delivery.",
                        },
                        {
                          index: "02",
                          title: "Quenching and tempering",
                          text: "Supports controlled heating processes for heat treatment workflows that require repeatability.",
                        },
                        {
                          index: "03",
                          title: "General metal heat treatment",
                          text: "A practical option for a range of metal part heating tasks across industrial production environments.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/8 to-white/4 px-6 py-6 md:px-7"
                        >
                          <div className="flex w-16 shrink-0 justify-center">
                            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-300">
                              {item.index}
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 border-l border-white/10 pl-6">
                            <h4 className="text-xl font-semibold leading-7">{item.title}</h4>
                            <p className="mt-2 max-w-3xl leading-7 text-white/70">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Key Benefits
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">Performance highlights</h3>
                    <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <p className="text-white/80">Stable digital medium-frequency output for forging and heat treatment.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <p className="text-white/80">Precise process control for reliable heating consistency.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <p className="text-white/80">Suitable for customers who need practical performance and dependable operation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Video
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">Operation and application preview</h3>
                    <p className="mt-3 max-w-3xl leading-7 text-white/70">
                      Use this area to present a machine demonstration, application footage,
                      or a short process overview for prospective customers.
                    </p>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black">
                  <div className="flex min-h-[280px] flex-col items-center justify-center px-8 py-12 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
                      <span className="ml-1 text-xl">▶</span>
                    </div>
                    <p className="mt-6 text-lg font-medium text-white/90">Video placeholder</p>
                    <p className="mt-3 max-w-2xl text-white/60 leading-7">
                      Product demonstration video can be embedded here to show operating
                      process, heating effect, and on-site application scenarios.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="inquiry"
                className="mt-14 md:mt-18 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Send Inquiry
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Request a tailored solution
                </h2>
                <p className="mt-4 max-w-3xl text-white/70 leading-8">
                  Share your material, workpiece size, target temperature, and expected
                  production rhythm. Our team will help recommend a suitable induction
                  heating configuration for your application.
                </p>

                <div className="mt-8">
                  <form className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input placeholder="*Full Name" required />
                      <Input placeholder="*Email" type="email" required />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input placeholder="Phone" />
                      <Input placeholder="Country" required />
                    </div>
                    <Input placeholder="Company Name" />
                    <Textarea placeholder="*How Can We Help You?" rows={6} required />
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white h-11"
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6">
                  <h3 className="text-xl font-semibold">What to include</h3>
                  <div className="mt-5 space-y-4">
                    {[
                      "Material type and workpiece dimensions",
                      "Required heating temperature and process goal",
                      "Expected output or production rhythm",
                      "Installation environment and power conditions",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <p className="text-white/75 leading-7">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6 space-y-3 text-sm text-white/70">
                    <p>Tel: 086-371-60983870</p>
                    <p>Mobile: 86 18937640479</p>
                    <p>Email: info@gslipai.com</p>
                    <p className="leading-7">
                      Add: No. 101, 1st Floor, Unit 1, Building 72, International Medical
                      Industrial Park, Xinzheng, Zhengzhou, Henan, China
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-14 md:mt-18 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Related Products
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Explore similar medium-frequency solutions
                </h2>
                <p className="mt-4 max-w-3xl text-white/70 leading-8">
                  Compare nearby models in the same product family to find the right
                  power level and application fit for your production requirement.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {relatedProducts.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 transition-colors hover:border-blue-400/30 hover:bg-white/10"
                    >
                      <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-blue-300">
                        0{index + 1}
                      </div>
                      <h3 className="mt-5 text-xl font-semibold leading-8 transition-colors group-hover:text-blue-300">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-white/70 leading-7">{item.summary}</p>
                      <div className="mt-6 text-sm font-semibold text-blue-300">
                        View Product
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ProductCategoryNav currentSlug={product.category.slug} />
          </div>
        </Container>
      </section>
    </main>
  );
}


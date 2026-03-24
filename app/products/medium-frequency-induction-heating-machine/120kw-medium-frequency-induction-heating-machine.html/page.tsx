import { Container, Prose } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import productImage from "@/pics/products/Medium Frequency Induction Heating Equipment.jpg";
import productImageAlt from "@/pics/products/Medium Frequency Induction Heating Equipment-2.jpg";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

const product = {
  category: {
    name: "Medium Frequency Induction Heating Machine",
    slug: "medium-frequency-induction-heating-machine",
  },
  title: "120KW Medium Frequency Induction Heating Machine",
  code: "GS-ZP-120",
  technicalParameters: [
    { label: "Input voltage", value: "Three phase 380V/50-60Hz" },
    { label: "Input current", value: "180A" },
    { label: "Output power", value: "120KW" },
    { label: "Oscillation frequency", value: "2-10KHZ" },
    { label: "Load rate", value: "99%" },
    { label: "Cooling water pressure", value: "0.2MPa" },
    { label: "Cooling water flow", value: "≥15m³/h" },
  ],
  applications: [
    "Quenching: suitable for quenching steel bars ranging from 60 to 160mm, with a depth of 3.5-6mm.",
    "Heat treatment: quenching and annealing of mechanical metal parts (surface, inner hole, local, overall) such as automotive and motorcycle parts and internal parts.",
    "Diathermic forming: round steel with a diameter of less than 100mm, heating the metal material for stretching, shaping, embossing, etc.",
    "Melting: 150KG of precious metals such as gold, silver, copper, etc.",
  ],
} as const;

const relatedProducts = [
  {
    title: "GS-ZP-200 Digital Medium Frequency Induction Heating Equipment",
    href: "/products/medium-frequency-induction-heating-machine/gs-zp-200-digital-medium-frequency-induction-heating-equipment.html",
    image: productImageAlt,
  },
  {
    title: "300KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/300kw-medium-frequency-induction-heating-machine.html",
    image: productImage,
  },
  {
    title: "800KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/800kw-medium-frequency-induction-heating-machine.html",
    image: productImageAlt,
  },
  {
    title: "1200KW Medium Frequency Induction Heating Machine",
    href: "/products/medium-frequency-induction-heating-machine/1200kw-medium-frequency-induction-heating-machine.html",
    image: productImage,
  },
] as const;

export const metadata: Metadata = {
  title: product.title,
  description: `Technical parameters, applications, and video for ${product.code} ${product.title}.`,
  alternates: {
    canonical: `/products/${product.category.slug}/120kw-medium-frequency-induction-heating-machine.html`,
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-56 md:h-72 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {product.title}
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
              href={`/products/${product.category.slug}`}
              className="hover:text-white transition-colors"
            >
              {product.category.name}
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-white/90">{product.title}</span>
          </div>
        </Container>
      </section>

      <section className="bg-black">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 items-start">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
                <div className="aspect-[4/3] w-full rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                  <Image
                    src={productImage}
                    alt={product.title}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white">
                <p className="text-sm text-white/70">{product.code}</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                  {product.title}
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  The {product.code} medium frequency induction heating machine delivers stable 120KW output
                  power for forging, heat treatment, diathermic forming, and melting applications.
                </p>

                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-500 text-white h-11 px-6"
                  >
                    <a href="#inquiry">Send Inquiry</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-18 rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 text-white">
            <Prose className="text-white [&_a]:text-blue-300 [&_a]:decoration-blue-300/40">
              <h2>Technical parameters of {product.code} medium frequency induction heating machine</h2>
            </Prose>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                <tbody>
                  {product.technicalParameters.map((row) => (
                    <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                      <td className="w-1/2 px-4 py-3 text-white/80 font-medium bg-white/5">
                        {row.label}
                      </td>
                      <td className="w-1/2 px-4 py-3 text-white/90">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Prose className="mt-12 text-white [&_a]:text-blue-300 [&_a]:decoration-blue-300/40">
              <h2>Applications of {product.code} medium frequency induction heating machine</h2>
              <ul>
                {product.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Video of {product.code} medium frequency induction heating machine</h2>
            </Prose>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-10 text-center">
              <p className="text-white/70">Video placeholder</p>
            </div>
          </div>

          <div
            id="inquiry"
            className="mt-14 md:mt-18 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-white"
          >
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

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white/90">Related Products</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((p) => (
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
                        className="w-full h-32 object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-white/85 line-clamp-2">
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 border-t border-white/10">
        <Container className="py-14 md:py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-semibold">Need A One-stop Solution?</h2>
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


import { Container, Prose } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import productImage from "@/pics/products/Medium Frequency Induction Heating Equipment-2.jpg";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

const product = {
  category: {
    name: "Medium Frequency Induction Heating Machine",
    slug: "medium-frequency-induction-heating-machine",
  },
  title: "800KW Medium Frequency Induction Heating Machine",
  code: "GS-ZP-800",
  summary:
    "Ultra-high power medium frequency induction heating machine for large workpieces and high-throughput production.",
} as const;

export const metadata: Metadata = {
  title: product.title,
  description: product.summary,
  alternates: {
    canonical: `/products/${product.category.slug}/800kw-medium-frequency-induction-heating-machine.html`,
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
                Product Overview
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">{product.summary}</p>
              <div className="mt-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white h-11 px-6">
                  <a href="#inquiry">Send Inquiry</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-18 rounded-2xl border border-white/10 bg-white/5 p-10 md:p-12 text-white">
            <Prose className="text-white [&_a]:text-blue-300 [&_a]:decoration-blue-300/40">
              <h2>Technical parameters</h2>
              <p>
                For detailed specifications, please contact us with your workpiece size and heating cycle.
              </p>
              <h2>Applications</h2>
              <ul>
                <li>Large billet heating</li>
                <li>Heavy-duty forging</li>
                <li>High-throughput heat treatment</li>
              </ul>
              <h2>Video</h2>
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
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}


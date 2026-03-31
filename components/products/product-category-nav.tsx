import { productsCatalog } from "@/lib/products-catalog";
import Link from "next/link";

export function ProductCategoryNav({ currentSlug }: { currentSlug?: string }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <h3 className="text-lg font-semibold text-white/90">Product Categories</h3>
        <div className="mt-4 h-px bg-white/10" />
        <ul className="mt-5 space-y-2">
          {productsCatalog.map((c) => {
            const active = c.slug === currentSlug;
            return (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className={[
                    "block rounded-md px-3 py-2 transition-colors",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}


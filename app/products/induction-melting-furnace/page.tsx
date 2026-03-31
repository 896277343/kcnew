import { CatalogCategoryPage } from "@/components/products/catalog-category-page";
import { getCatalogCategory } from "@/lib/products-catalog";
import { notFound } from "next/navigation";

export default function Page() {
  const category = getCatalogCategory("induction-melting-furnace");

  if (!category) {
    notFound();
  }

  return <CatalogCategoryPage category={category} />;
}


import { CatalogCategoryPage } from "@/components/products/catalog-category-page";
import { getCatalogCategory } from "@/lib/products-catalog";
import { notFound } from "next/navigation";

export default function Page() {
  const category = getCatalogCategory("medium-frequency-induction-heating-machine");

  if (!category) {
    notFound();
  }

  return <CatalogCategoryPage category={category} />;
}


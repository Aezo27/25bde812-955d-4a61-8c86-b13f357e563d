import { getProduct } from "@/utils/data/api";
import ProductFooter from "./components/Footer";
import ProductHeader from "./components/Header";
import ProductTable from "./components/Table";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    page?: string;
  };
}) {
  const { data, pages } = await getProduct(searchParams);
  const products = data.products;
  const total = data.total;
  return (
    <main className="min-h-screen back bg-gray-100 dark:bg-gray-900 pt-4 pb-20">
      <section className="container px-4 mx-auto">
        <ProductHeader
          total={total}
          search={searchParams?.search}
          category={searchParams?.category}
        />
        <ProductTable products={products} total={total} />
        <ProductFooter pages={pages} />
      </section>
    </main>
  );
}

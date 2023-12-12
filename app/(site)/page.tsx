import { getProduct } from "@/utils/data/api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";

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
  const products = data?.products;
  const total = data?.total;
  return (
    <main className="min-h-screen back bg-gray-100 dark:bg-gray-900 pt-4 pb-20">
      <section className="container px-4 mx-auto">
        <Header
          total={total}
          search={searchParams?.search}
          category={searchParams?.category}
        />
        <Table products={products} total={total} />
        <Footer pages={pages} />
      </section>
    </main>
  );
}

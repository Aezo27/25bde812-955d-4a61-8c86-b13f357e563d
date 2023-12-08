import ProductFooter from "./ProductFooter";
import ProductHeader from "./ProductHeader";
import ProductTable from "./ProductTable";

const Product = (props: any) => {
  return (
    <section className="container px-4 mx-auto">
      <ProductHeader/>
      <ProductTable/>
      <ProductFooter/>
    </section>
  );
};

export default Product;
import { getProducts } from '../actions/get-products';
import ProductsList from '../component/ProductList';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

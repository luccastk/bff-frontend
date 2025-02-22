import { getExpiring } from '../actions/get-products';
import ProductsList from '../component/ProductList';

export default async function ProductsPage() {
  const products = await getExpiring();

  return (
    <div>
      <ProductsList products={products} showValidity={true}/>
    </div>
  );
}

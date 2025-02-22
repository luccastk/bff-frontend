'use client';

import { Product } from "../types/product";

interface ProductListProps {
    products?: Product[];
    showValidity?: boolean
}

export default function ProductsList({ products = [], showValidity = false }: ProductListProps) {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                {showValidity && <th>Validity</th>}
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            {products.length > 0 ? (
                products.map((product) => (
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        {showValidity && <td>{product.validity ?? 'Sem data'}</td>}
                        <td>R$ {product.price.toFixed(2)}</td>
                    </tr>
                ))
            ) : (
                <p>Produtos Indisponíveis</p>
            )}
        </tbody>
    </table>
  );
}

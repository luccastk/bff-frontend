'use client';

import { Product } from "../types/product";

interface ProductListProps {
    products?: Product[];
    showValidity?: boolean;
}

export default function ProductsList({ products = [], showValidity = false }: ProductListProps) {
  return (
    <div className="table-responsive" style={{ maxHeight: "60vh", overflowY: "auto" }}>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Quantidade</th>
            {showValidity && <th>Validade</th>}
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                {showValidity && <td>{product.validity ?? "Sem data"}</td>}
                <td>R$ {product.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center">
                Produtos Indisponíveis
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

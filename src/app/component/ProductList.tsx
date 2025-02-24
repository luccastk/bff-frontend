'use client';

import { useState } from "react";
import { Product } from "../types/product";
import Navbar from "./Navbar";

interface ProductListProps {
  products?: Product[];
  showValidity?: boolean;
  onEdit?: (product: Product) => void; // Função para editar
  onDelete?: (id: number) => void; // Função para excluir
}

export default function ProductsList({ products = [], showValidity = false, onEdit, onDelete }: ProductListProps) {
  const [sortColumn, setSortColumn] = useState<keyof Product | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof Product) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (column: keyof Product) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? "bi bi-arrow-up" : "bi bi-arrow-down";
    }
    return "bi bi-arrow-down-up";
  };

  // Ordenação dos produtos
  const sortedProducts = [...products].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    }
    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    return 0;
  });

  return (
    <div className="table-responsive" style={{ maxHeight: "60vh", overflowY: "auto" }}>
      <Navbar />
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col" onClick={() => handleSort("id")} className="sortable">
              ID <i className={getSortIcon("id")}></i>
            </th>
            <th scope="col" onClick={() => handleSort("name")} className="sortable">
              Nome <i className={getSortIcon("name")}></i>
            </th>
            <th scope="col" onClick={() => handleSort("quantity")} className="sortable">
              Quantidade <i className={getSortIcon("quantity")}></i>
            </th>
            {showValidity && (
              <th scope="col" onClick={() => handleSort("validity")} className="sortable">
                Validade <i className={getSortIcon("validity")}></i>
              </th>
            )}
            <th scope="col" onClick={() => handleSort("price")} className="sortable">
              Preço <i className={getSortIcon("price")}></i>
            </th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                {showValidity && <td>{product.validity ?? "Sem data"}</td>}
                <td>R$ {product.price.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit?.(product)}
                  >
                    <i className="bi bi-pencil"></i> Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete?.(product.id)}
                  >
                    <i className="bi bi-trash"></i> Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={showValidity ? 6 : 5} className="text-center">
                Produtos Indisponíveis
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

import { Product, ProductResponse } from "../types/product";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) {
      throw new Error('Erro ao carregar produtos');
    }
    const response: ProductResponse = await res.json();
    return response.data.content;
  }

export async function getExpiring(): Promise<Product[]>{
  const res = await fetch('http://localhost:3000/api/reports');
  if (!res.ok) {
    throw new Error('Erro ao carregar produtos');
  }
  const response: ProductResponse = await res.json();
  return response.data;
}
export interface Product {
    id: number;
    name: string;
    quantity: number;
    validity: string | null;
    description: string | null;
    price: number;
  }
  
  export interface ProductData {
    content: Product[];
  }
  
  export interface ProductResponse {
    data: ProductData;
  }
  
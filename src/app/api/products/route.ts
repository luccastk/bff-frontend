export async function GET() {
    const response = await fetch('http://localhost/products-ms/v1/products');

    const products = await response.json();

    return Response.json(products);
}

export async function POST() {
    const response = await fetch('http://localhost/products-ms/v1/products/create')
}
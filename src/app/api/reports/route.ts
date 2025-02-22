export async function GET() {
    const response = await fetch('http://localhost/products-ms/v1/reports/expiring');

    const products = await response.json();

    return Response.json(products);
}
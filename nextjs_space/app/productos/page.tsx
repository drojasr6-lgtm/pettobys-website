// nextjs_space/app/productos/page.tsx

import ProductsClient, { Product } from "./products-client";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

async function getProductsFromApi(): Promise<Product[]> {
  try {
    const baseUrl = getBaseUrl();

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Error al llamar /api/products:", res.status);
      return [];
    }

    const data = (await res.json()) as Product[];
    return data;
  } catch (error) {
    console.error("Error haciendo fetch a /api/products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProductsFromApi();
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return <ProductsClient products={products} categories={categories} />;
}

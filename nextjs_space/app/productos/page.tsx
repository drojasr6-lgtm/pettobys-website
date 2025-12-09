// nextjs_space/app/productos/page.tsx

import ProductsClient from "./products-client";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  isFeatured: boolean;
  inStock: boolean;
};

// Construye una URL BASE absoluta para el servidor
function getBaseUrl() {
  // 1. Si definiste NEXT_PUBLIC_SITE_URL en Vercel, úsala
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Si estás en Vercel, usa el dominio automático
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3. Fallback local
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

  // Si quieres categorías para el filtro:
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <ProductsClient
      products={products}
      categories={categories}
    />
  );
}

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

async function getProductsFromApi(): Promise<Product[]> {
  try {
    // RUTA RELATIVA: funciona en dev y en producción
    const res = await fetch("/api/products", {
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

  return (
    <ProductsClient
      products={products}
      categories={categories}
    />
  );
}

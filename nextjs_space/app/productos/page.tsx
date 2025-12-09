// nextjs_space/app/productos/page.tsx

import ProductsClient from "./products-client";

// Tipo básico de producto (ajústalo si ya tienes uno definido en tu proyecto)
type Product = {
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

// Esta función se ejecuta en el servidor y llama a la API /api/products
async function getProductsFromApi(): Promise<Product[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/products`,
      {
        // Para que no use caché y siempre traiga los productos actuales
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Error al obtener productos:", res.status);
      return [];
    }

    const data = (await res.json()) as Product[];
    return data;
  } catch (error) {
    console.error("Error llamando a /api/products:", error);
    return [];
  }
}

// Componente de página (Server Component)
export default async function ProductsPage() {
  const products = await getProductsFromApi();

  return <ProductsClient products={products} />;
}

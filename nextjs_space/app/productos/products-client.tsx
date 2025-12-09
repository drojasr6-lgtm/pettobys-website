"use client";

import { useMemo, useState } from "react";

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

type ProductsClientProps = {
  products: Product[];
  categories: string[];
};

export default function ProductsClient({
  products,
  categories,
}: ProductsClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const text = (
        product.name +
        " " +
        product.description +
        " " +
        product.category
      ).toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Categoría */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Categoría:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="Todos">Todos</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Buscador */}
        <div className="flex-1 md:max-w-md">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Contador */}
      <p className="text-sm text-gray-600 mb-4">
        {filteredProducts.length} producto
        {filteredProducts.length !== 1 ? "s" : ""} encontrados
      </p>

      {/* Grid de productos */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          No se encontraron productos
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow-sm bg-white flex flex-col"
            >
              <div className="aspect-[4/3] mb-4 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Aquí podrías usar next/image si quieres */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Categoría: {product.category}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-orange-600">
                  ${product.price.toLocaleString("es-CO")}
                </span>
                {product.inStock ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                    En stock
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">
                    Agotado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

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

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("Todos");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Traer productos desde /api/products PERO EN EL CLIENTE
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/products", {
          cache: "no-store",
        });

        if (!res.ok) {
          setError(`Error al cargar productos (${res.status})`);
          setProducts([]);
          return;
        }

        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch (err) {
        console.error("Error haciendo fetch a /api/products:", err);
        setError("No fue posible cargar los productos.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // 2. Sacar categorías únicas
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return ["Todos", ...Array.from(set)];
  }, [products]);

  // 3. Aplicar filtros (categoría + búsqueda)
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (categoryFilter !== "Todos") {
      list = list.filter((p) => p.category === categoryFilter);
    }

    if (search.trim()) {
      const term = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.slug.toLowerCase().includes(term)
      );
    }

    return list;
  }, [products, categoryFilter, search]);

  // 4. Render
  return (
    <main style={{ padding: "2rem" }}>
      {/* Header simple (tu hero naranja ya lo pone el layout general) */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Nuestros Productos
        </h1>
        <p style={{ color: "#555" }}>
          {filteredProducts.length} producto
          {filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}.
        </p>
      </div>

      {/* Filtros */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: "0.5rem 0.75rem" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "Todos" ? "Todas las categorías" : cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem 0.75rem", flex: "1 1 250px" }}
        />
      </div>

      {/* Estados de carga / error */}
      {loading && <p>Cargando productos...</p>}

      {error && !loading && (
        <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
      )}

      {/* Lista de productos */}
      {!loading && filteredProducts.length === 0 && !error && (
        <p>No se encontraron productos.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
            }}
          >
            {product.imageUrl && (
              <div
                style={{
                  width: "100%",
                  paddingBottom: "60%",
                  position: "relative",
                  marginBottom: "0.75rem",
                  overflow: "hidden",
                  borderRadius: "6px",
                  backgroundColor: "#fafafa",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              {product.name}
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              {product.description}
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                marginBottom: "0.25rem",
              }}
            >
              Categoría: {product.category}
            </p>

            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              {product.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
              })}
            </p>

            {!product.inStock && (
              <p style={{ color: "red", fontWeight: 600 }}>Agotado</p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

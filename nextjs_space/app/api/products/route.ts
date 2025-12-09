import { NextResponse } from "next/server";

// Productos reales que estás mostrando en la web
// OJO: las rutas de imagen van a /products/... porque ahí es donde
// realmente están los archivos dentro de /public/products
const products = [
  {
    id: "1",
    name: "Pettobys Adulto Pollo y Arroz",
    slug: "adulto-pollo-arroz",
    description:
      "Alimento seco balanceado para perros adultos, sabor pollo y arroz.",
    category: "adulto",
    price: 95000,
    imageUrl: "/products/beef-vegetables.jpg", // ← ESTE ARCHIVO EXISTE EN /public/products
    isFeatured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Pettobys Cachorro Cordero",
    slug: "cachorro-cordero",
    description:
      "Fórmula especial para cachorros, con proteína de cordero y DHA.",
    category: "cachorro",
    price: 99000,
    imageUrl: "/products/chicken-broccoli.jpg", // ← TAMBIÉN EXISTE EN /public/products
    isFeatured: false,
    inStock: true,
  },
];

export async function GET() {
  return NextResponse.json(products);
}

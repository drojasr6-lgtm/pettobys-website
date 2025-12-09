import { NextResponse } from "next/server";

const products = [
  {
    id: "pollo-premium-1kg",
    name: "Pettobys Pollo Premium 1 kg",
    description: "Alimento húmedo natural a base de pollo para perros adultos.",
    price: 32000,
    category: "Alimento",
    image: "/products/pollo-premium-1kg.jpg",
    isFeatured: true,
  },
  {
    id: "res-natural-500g",
    name: "Pettobys Res Natural 500 g",
    description: "Receta de res, sin conservantes ni subproductos.",
    price: 19000,
    category: "Alimento",
    image: "/products/res-natural-500g.jpg",
    isFeatured: false,
  },
  {
    id: "snack-dental",
    name: "Snacks Dentales Pettobys",
    description: "Snacks funcionales para cuidado dental diario.",
    price: 15000,
    category: "Snacks",
    image: "/products/snack-dental.jpg",
    isFeatured: true,
  },
];

export async function GET() {
  return NextResponse.json(products);
}


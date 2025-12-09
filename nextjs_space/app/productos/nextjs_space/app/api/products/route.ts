import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Pettobys Adulto Pollo y Arroz",
      slug: "adulto-pollo-arroz",
      description:
        "Alimento seco balanceado para perros adultos, sabor pollo y arroz.",
      category: "adulto",
      price: 95000,
      imageUrl: "/images/products/adulto-pollo-arroz.png",
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
      imageUrl: "/images/products/cachorro-cordero.png",
      isFeatured: false,
      inStock: true,
    },
    {
      id: "3",
      name: "Pettobys Senior Salmón",
      slug: "senior-salmon",
      description:
        "Alimento premium para perros senior, con salmón y antioxidantes.",
      category: "senior",
      price: 105000,
      imageUrl: "/images/products/senior-salmon.png",
      isFeatured: false,
      inStock: true,
    },
  ];

  return NextResponse.json(products);
}


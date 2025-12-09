import { NextResponse } from 'next/server';

// Example products - you can change them later
const products = [
  {
    id: '1',
    name: 'Pettobys Adulto Pollo y Arroz',
    slug: 'adulto-pollo-arroz',
    description:
      'Alimento seco balanceado para perros adultos, sabor pollo y arroz.',
    category: 'adulto',
    price: 95000,
    imageUrl: '/images/products/adulto-pollo-arroz.png',
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Pettobys Cachorro Cordero',
    slug: 'cachorro-cordero',
    description:
      'Fórmula especial para cachorros, con proteína de cordero y DHA.',
    category: 'cachorro',
    price: 99000,
    imageUrl: '/images/products/cachorro-cordero.png',
    isFeatured: false,
    inStock: true,
  },
];

export async function GET() {
  return NextResponse.json(products);
}


import ProductsClient from './products-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Productos - Pettobys',
  description: 'Descubre nuestra línea completa de alimentos naturales para perros. Comidas balanceadas con 60% carne y 40% vegetales.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}

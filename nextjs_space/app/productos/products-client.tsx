'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import ProductCard from '@/components/product-card';

interface Product {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  imageUrl: string;
  category: string;
  mainIngredients: string[];
  nutritionProtein: string;
  nutritionFat: string;
  nutritionCalories: string;
  composition: string;
  portionSizes: string[];
  featured: boolean;
}

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'beef', label: 'Res' },
  { value: 'chicken', label: 'Pollo' },
  { value: 'turkey', label: 'Pavo' },
  { value: 'lamb', label: 'Cordero' },
];

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res?.json?.())
      .then((data) => {
        const productList = data?.products ?? [];
        setProducts(productList);
        setFilteredProducts(productList);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...(products ?? [])];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p?.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p?.nameEs?.toLowerCase?.()?.includes?.(searchQuery?.toLowerCase?.() ?? '') ||
        p?.name?.toLowerCase?.()?.includes?.(searchQuery?.toLowerCase?.() ?? '')
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Alimentación natural, balanceada y deliciosa para la salud y felicidad de tu perro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e?.target?.value ?? 'all')}
                className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-gray-700"
              >
                {categories?.map?.((cat) => (
                  <option key={cat?.value} value={cat?.value ?? 'all'}>
                    {cat?.label ?? ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 w-full md:w-auto md:flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value ?? '')}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 w-full md:w-auto text-center md:text-right">
              {filteredProducts?.length ?? 0} productos encontrados
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts?.map?.((product, index) => (
                <ProductCard key={product?.id ?? index} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">No se encontraron productos</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-amber-600 hover:text-amber-700 font-semibold"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

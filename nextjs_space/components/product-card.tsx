'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Package, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: {
    id?: string;
    name?: string;
    nameEs?: string;
    description?: string;
    descriptionEs?: string;
    imageUrl?: string;
    category?: string;
    mainIngredients?: string[];
    nutritionProtein?: string;
    nutritionFat?: string;
    nutritionCalories?: string;
    composition?: string;
    portionSizes?: string[];
    featured?: boolean;
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50">
        {product?.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product?.nameEs ?? product?.name ?? 'Product'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {product?.featured && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Sparkles className="w-3 h-3" />
            Destacado
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {product?.nameEs ?? product?.name ?? ''}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product?.descriptionEs ?? product?.description ?? ''}
        </p>

        <div className="space-y-3">
          {/* Ingredients */}
          {product?.mainIngredients && product.mainIngredients.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-1">Ingredientes principales:</p>
              <p className="text-xs text-gray-600">{product.mainIngredients.join(', ')}</p>
            </div>
          )}

          {/* Nutrition Info */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-amber-50 rounded-lg p-2">
              <p className="text-xs text-gray-600">Proteína</p>
              <p className="text-sm font-semibold text-amber-700">{product?.nutritionProtein ?? 'N/A'}</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-2">
              <p className="text-xs text-gray-600">Calorías</p>
              <p className="text-sm font-semibold text-orange-700">{product?.nutritionCalories ?? 'N/A'}</p>
            </div>
          </div>

          {/* Portion Sizes */}
          {product?.portionSizes && product.portionSizes.length > 0 && (
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
              <Package className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                {product.portionSizes.map((size) => (
                  <span key={size} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Leaf, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')] bg-cover bg-center opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Pettobys
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Alimento Natural y Nutritivo para tu Mascota
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Comida saludable, práctica y lista para el consumo. 100% ingredientes naturales, 
              sin conservantes ni colorantes artificiales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Ver Productos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-amber-200"
              >
                Conoce Más
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium">Nutritivo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Seguro</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/6ea39830-195c-4e6b-8b49-40cfec26c19d.png"
                alt="Happy Healthy Dog"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
              <p className="text-4xl font-bold text-amber-600 mb-1">60/40</p>
              <p className="text-sm text-gray-600">60% carne, 40% vegetales</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

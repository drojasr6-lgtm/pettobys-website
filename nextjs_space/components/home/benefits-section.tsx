'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, Shield, Clock, Award, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Sin conservantes ni colorantes artificiales. Solo ingredientes naturales y frescos.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Heart,
    title: 'Nutritivo y Balanceado',
    description: '60% carne magra y 40% vegetales frescos. Balance perfecto de proteínas y vitaminas.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Shield,
    title: 'Seguridad Alimentaria',
    description: 'Procesos controlados y trazabilidad completa. Calidad garantizada en cada porción.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Listo para Consumir',
    description: 'Práctico y conveniente. Sin preparación necesaria, sólo sirve y disfruta.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Manufactura avanzada con tecnología de Industria 5.0 para calidad superior.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Sparkles,
    title: 'Porciones Adaptadas',
    description: 'Disponible en 100g, 200g y 300g según el tamaño de tu perro.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Pettobys?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos alimentación saludable y natural con los más altos estándares de calidad y seguridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map?.((benefit, index) => {
            const Icon = benefit?.icon;
            return (
              <motion.div
                key={benefit?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${benefit?.bgColor ?? 'bg-gray-50'} mb-4 group-hover:scale-110 transition-transform`}>
                  {Icon && <Icon className={`w-6 h-6 ${benefit?.color ?? 'text-gray-600'}`} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit?.title ?? ''}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit?.description ?? ''}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

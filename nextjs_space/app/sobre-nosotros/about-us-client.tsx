'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Leaf, Award, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Award,
    title: 'Calidad Asegurada',
    description: 'Control de calidad riguroso en cada etapa de producción.',
  },
  {
    icon: Shield,
    title: 'Inocuidad Alimentaria',
    description: 'Procesos seguros e higiénicos garantizados.',
  },
  {
    icon: Sparkles,
    title: 'Innovación',
    description: 'Integración de tecnologías de Industria 5.0.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Compromiso con el medio ambiente y uso eficiente de recursos.',
  },
  {
    icon: TrendingUp,
    title: 'Mejora Continua',
    description: 'Optimización constante de procesos y productos.',
  },
  {
    icon: Target,
    title: 'Trazabilidad',
    description: 'Seguimiento completo desde materia prima hasta distribución.',
  },
];

const processSteps = [
  { number: '01', title: 'Recepción', description: 'Verificación de calidad de materias primas' },
  { number: '02', title: 'Lavado', description: 'Desinfección de vegetales' },
  { number: '03', title: 'Corte', description: 'Preparación uniforme de ingredientes' },
  { number: '04', title: 'Cocción', description: 'Temperaturas controladas 75-80°C' },
  { number: '05', title: 'Mezclado', description: '60% carne, 40% vegetales' },
  { number: '06', title: 'Porcionado', description: 'Básculas digitales de precisión' },
  { number: '07', title: 'Empaque', description: 'Sellado hermético al vacío' },
  { number: '08', title: 'Control', description: 'Inspección visual y visión artificial' },
  { number: '09', title: 'Almacenamiento', description: 'Cadena de frío mantenida' },
  { number: '10', title: 'Distribución', description: 'Entrega controlada con trazabilidad' },
];

const technologies = [
  { name: 'IoT Industrial', description: 'Sensores inteligentes en tiempo real' },
  { name: 'Robótica', description: 'Automatización de empaque y etiquetado' },
  { name: 'PLC', description: 'Control automático de procesos' },
  { name: 'CNC', description: 'Corte automatizado de precissión' },
  { name: 'IA', description: 'Visión artificial para control de calidad' },
  { name: 'Digital Twin', description: 'Gemelo digital para optimización' },
];

export default function AboutUsClient() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              En Pettobys, combinamos ingredientes naturales de alta calidad con tecnología avanzada 
              para ofrecer la mejor alimentación para tu mascota.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ofrecer a los consumidores un alimento práctico, nutritivo y natural para sus mascotas, 
                garantizando calidad, inocuidad alimentaria y estándares de seguridad en cada producto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estamos comprometidos con la selección de materias primas de alta calidad, tecnologías 
                de manufactura avanzadas, protocolos estrictos de control de calidad y prácticas de 
                producción sostenibles y responsables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://cdn.abacus.ai/images/1d550d25-021a-429a-8886-af9417a48f81.png"
                alt="Pettobys Quality Food"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Pettobys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values?.map?.((value, index) => {
              const Icon = value?.icon;
              return (
                <motion.div
                  key={value?.title ?? index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value?.title ?? ''}</h3>
                  <p className="text-gray-600 leading-relaxed">{value?.description ?? ''}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Manufactura
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              10 etapas controladas para garantizar calidad y seguridad en cada porción.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps?.map?.((step, index) => (
              <motion.div
                key={step?.number ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xl font-bold mb-3 shadow-lg">
                  {step?.number ?? ''}
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{step?.title ?? ''}</h4>
                <p className="text-xs text-gray-600 leading-tight">{step?.description ?? ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnología de Industria 5.0
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Empleamos sistemas de manufactura flexible de Industria 5.0 que combinan automatización avanzada, 
              inteligencia artificial, colaboración humano-máquina y sostenibilidad para asegurar producción 
              eficiente, segura y personalizada.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies?.map?.((tech, index) => (
              <motion.div
                key={tech?.name ?? index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform shadow-lg border border-gray-600"
              >
                <h4 className="font-bold text-amber-400 mb-2">{tech?.name ?? ''}</h4>
                <p className="text-xs text-gray-300">{tech?.description ?? ''}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Liderando con Industria 5.0</h3>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
              Pettobys implementa activamente los principios de Industria 5.0: personalización masiva para 
              necesidades específicas de cada mascota, colaboración humano-máquina optimizada, sostenibilidad 
              avanzada en cada proceso y adaptación inteligente a las demandas del mercado.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

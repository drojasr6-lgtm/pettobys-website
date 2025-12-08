'use client';

import { motion } from 'framer-motion';
import { Cpu, Network, Shield, Zap, Bot, Database } from 'lucide-react';

const technologies = [
  {
    icon: Cpu,
    title: 'Industria 5.0',
    description: 'Manufactura inteligente con IA, IoT y colaboración humano-máquina.',
  },
  {
    icon: Bot,
    title: 'Robótica Avanzada',
    description: 'Automatización precisa en empaque y control de calidad.',
  },
  {
    icon: Network,
    title: 'Trazabilidad',
    description: 'Seguimiento completo desde materia prima hasta entrega.',
  },
  {
    icon: Shield,
    title: 'Control de Calidad',
    description: 'Inspección con visión artificial e IA en tiempo real.',
  },
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología e Innovación
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Implementamos tecnologías avanzadas de Industria 5.0 para garantizar la máxima calidad, 
            seguridad, sostenibilidad y personalización en cada etapa de producción.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies?.map?.((tech, index) => {
            const Icon = tech?.icon;
            return (
              <motion.div
                key={tech?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-amber-500"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4">
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{tech?.title ?? ''}</h3>
                <p className="text-gray-300 leading-relaxed">{tech?.description ?? ''}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

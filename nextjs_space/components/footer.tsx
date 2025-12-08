'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date()?.getFullYear?.() ?? 2025;

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
              Pettobys
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Comida saludable, natural y nutritiva para tu mascota. Calidad garantizada en cada porción.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Enlaces Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/productos" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Productos
              </Link>
              <Link href="/sobre-nosotros" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Contacto</h4>
            <p className="text-sm text-gray-600">
              ¿Tienes preguntas? Contáctanos y con gusto te atenderemos.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-1">
            © {currentYear} Pettobys. Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para tu mascota.
          </p>
        </div>
      </div>
    </footer>
  );
}

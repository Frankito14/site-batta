'use client';

import { useState } from "react";
import Link from "next/link";

type NavigatorSectionProps = {
  path: string;
};

export default function NavigatorSection({ path }: NavigatorSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full    top-0 z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <i className="fas fa-truck mr-2"></i>Transportes Batta
            </div>
          </div>

          <div className="hidden md:block">
            <nav
              className="ml-10 flex items-baseline space-x-4"
              aria-label="Navegación principal"
            >
              <Link
                href={path}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Volver
              </Link>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              id="mobile-menu-button"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 cursor-pointer"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          aria-label="Navegación móvil"
        >
          <Link
            onClick={closeMenu}
            href={path}
            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Volver
          </Link>
        </nav>
      </div>
    </nav>
  );
}

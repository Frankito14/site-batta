import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              <i className="fas fa-truck mr-2"></i>Transportes Batta
            </div>
            <p className="text-gray-300 mb-1 max-w-md">
              <span className="font-semibold">Teléfono:</span> 011 5054-5987
            </p>
            <p className="text-gray-300 mb-3 max-w-md">
              <span className="font-semibold">Dirección:</span> Segurola 2667, Capital Federal
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/logisticadibat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitanos en Instagram"
                className="hidden text-pink-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=541150545987&text=%C2%A1HOLA%21+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+espero+su+respuesta+%C2%A1MUCHAS+GRACIAS%21&type=phone_number&app_absent=0"
                className="text-green-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactanos por WhatsApp"
              >
                <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/Mudanzas-fletes-logistica/@-34.6117617,-58.508508,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb779bb020ba5:0x9cadb26a3c1db77a!8m2!3d-34.6117617!4d-58.508508"
                className="text-red-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver nuestra ubicación en Google Maps"
              >
                <i className="fas fa-map-marker-alt text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link href="/landing#nosotros" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir a la sección Nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/landing#servicios" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir a la sección Servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/landing#cobertura" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir a la sección Cobertura">
                  Cobertura
                </Link>
              </li>
              <li>
                <Link href="/landing#contacto" className="text-gray-300 hover:text-white transition-colors" aria-label="Ir a la sección Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link href="/fletes" className="text-gray-300 hover:text-white transition-colors" aria-label="Conocer sobre nuestro servicio de Fletes">
                  Fletes
                </Link>
              </li>
              <li>
                <Link href="/mudanzas" className="text-gray-300 hover:text-white transition-colors" aria-label="Conocer sobre nuestro servicio de Logística">
                  Mudanza
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Transportes Batta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
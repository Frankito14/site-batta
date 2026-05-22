import ContactoImage from "@/assets/images/contacto.webp";
import Image from 'next/image';


export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Contacto
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              ¿Hablamos por WhatsApp?
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Contactanos directamente para resolver tus consultas rápidas o pedir una cotización a medida en minutos.
            </p>

            {/* Tarjeta / Botón de WhatsApp Prolijo */}
            <a
              href="https://wa.me/5491150545987"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full max-w-md bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 group text-left"
              role="region"
              aria-label="Contacto principal por WhatsApp"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 text-white rounded-xl p-3 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Chat directo</span>
                  <span className="block text-xl md:text-2xl font-bold text-gray-800 tracking-tight">+54 9 11 5054-5987</span>
                </div>
              </div>

              {/* Flecha indicadora estética */}
              <div className="text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300 pr-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 w-full flex justify-center">
            <div className="relative w-full max-w-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={ContactoImage}
                alt="Imagen de contacto"
                width={550}
                height={550}
                className=" transition-transform duration-700 hover:scale-[1.04]"
                quality={95}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
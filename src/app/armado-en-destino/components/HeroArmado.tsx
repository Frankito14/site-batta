import { whatsappURL } from "@utils/whatsapp";
import ImageArmado from "@assets/images/servicios/armado.webp";
import Image from "next/image";

const DATA = {
    title: "Armado en Destino",
    subtitle: "¡Relajate, nosotros armamos tus muebles!",
    description: "En Transportes Batta, queremos que disfrutes de tu nuevo hogar desde el primer minuto. Por eso, al elegir nuestros servicios Intermedio o Full, ¡te incluimos el armado de tus muebles en destino!",
    items: [
        { icon: "fas fa-bed", title: "Camas (bases)" },
        { icon: "fas fa-baby-carriage", title: "Cunas" },
        { icon: "fas fa-door-closed", title: "Placards y armarios" },
        { icon: "fas fa-book", title: "Bibliotecas y repisas" },
        { icon: "fas fa-tv", title: "Rack de TV" },
        { icon: "fas fa-table", title: "Mesas" }

    ],
}

export default function HeroArmado() {
    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por el servicio de Armado en Destino`);

    return (
        <section className="mt-12 relative flex items-center justify-center bg-white text-gray-900 overflow-hidden py-12 lg:py-16">
            {/* Background elements to match aesthetic */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* IZQ: Image Placeholder */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                        <div className="relative z-10 w-full h-full p-2 md:p-4 flex items-center justify-center overflow-hidden">
                            <Image
                                src={ImageArmado}
                                alt="Armado de muebles en destino"
                                className="w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>

                    {/* DER: Text & Specs */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight mb-3 text-gray-900">
                                {DATA.title}
                            </h1>
                            <p className="text-md text-gray-600 leading-relaxed max-w-xl mb-2">
                                {DATA.description}
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 border-y border-gray-200">
                            {DATA.items.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-700">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <i className={item.icon}></i>
                                    </div>
                                    <span className="text-sm font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        {/* Requisito indispensable */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <i className="fas fa-exclamation-triangle text-amber-500 text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-amber-800  mb-1 text-sm">Para garantizar un armado perfecto, recordá estos detalles:</h3>
                                <ul className="space-y-3 mt-2">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-amber-800 mt-1 mr-2"></i>
                                        <span className="text-amber-800">Los muebles <strong>no deben tener cola vinílica</strong> (pegamento) aplicada.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-amber-800 mt-1 mr-3"></i>
                                        <span className="text-amber-800">Deben contar con sus <strong>tornillos originales</strong>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-amber-800 mt-1 mr-3"></i>
                                        <span className="text-amber-800">La madera debe estar <strong>libre de humedad</strong>.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-600/40 space-x-3 group"
                            >
                                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                                </svg>
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

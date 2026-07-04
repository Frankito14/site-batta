import { whatsappURL } from "@utils/whatsapp";
import ImageKits from "@assets/images/servicios/entrega-kits.webp";
import Image from "next/image";

const DATA = {
    title: "Entrega de Kits",
    subtitle: "3 soluciones pensadas a tu medida",
    description: "Para que el embalaje de tus pertenencias sea rápido, seguro y organizado. En Transportes Batta tenemos tres planes pensados para que elijas el que mejor se adapte a tu mudanza:",
    items: [
        { icon: "fa-solid fa-box-open", title: "Plan Básico" },
        { icon: "fa-solid fa-truck-ramp-box", title: "Plan Intermedio" },
        { icon: "fa-solid fa-industry", title: "Plan Full" },
    ],
    bonus: "¡Lo mejor de todo! En cualquiera de los tres servicios, te bonificamos las cajas y cintas dentro de CABA y alrededores.",
    nextSteps: "¡Llamanos! Te escuchamos con atención y te asesoramos de forma gratuita. Si cerramos la operación, te enviamos los insumos directo a tu casa sin que tengas que moverte."
}

export default function HeroKits() {
    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por el servicio de Entrega de Kits de embalaje`);

    return (
        <section className="mt-12 relative flex items-center justify-center bg-white text-gray-900 overflow-hidden py-12 lg:py-16">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">



                    {/* Lado izquierdo (Texto) */}

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
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-gray-200">
                            {DATA.items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center space-y-2 text-gray-700 p-4 bg-gray-50/50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <span className="text-sm font-bold text-gray-800">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-center md:text-left flex flex-col items-center md:items-start">
                            <h4 className="font-bold text-gray-900 mb-2">¿Cómo seguimos?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                {DATA.nextSteps}
                            </p>
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg space-x-3 group"
                            >
                                <i className="fab fa-whatsapp text-xl"></i>
                                <span>¡Estamos para ayudarte!</span>
                            </a>
                        </div>
                    </div>

                    {/* Lado derecho (Imagen) */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0">
                        <div className="relative z-10 w-full h-full p-2 md:p-4 flex items-center justify-center overflow-hidden">
                            <Image
                                src={ImageKits}
                                alt="Entrega de Kits de embalaje"
                                className="w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

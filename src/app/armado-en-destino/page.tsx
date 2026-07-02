import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import ArmadoList from "./components/ArmadoList";
import Link from "next/link";
import { whatsappURL } from "@utils/whatsapp";

export default function ArmadoEnDestinoPage() {
    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por el servicio de Armado en Destino`);

    return (
        <main>
            <NavigatorSection path={"/landing#servicios"} />
            <ServicioLayout
                title="Armado en Destino"
                description="🚚 ¡Relajate, nosotros armamos tus muebles! ✨"
                id="armado-en-destino"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-700 text-center mb-10">
                        En TransportesBatta, queremos que disfrutes de tu nuevo hogar desde el primer minuto. Por eso, al elegir nuestros servicios <span className="font-semibold text-blue-600">Intermedio o Full</span>, ¡te incluimos el armado de tus muebles en destino! 🏠🛋️
                    </p>
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">¿Qué piezas ensamblamos? 🛠️</h3>
                </div>
                
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-12">
                    <ArmadoList />
                    <p className="text-center text-gray-600 mt-8 italic">
                        Nuestro objetivo es que todo quede listo para su uso inmediato. ✅
                    </p>
                </div>
                
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm mb-12">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <i className="fas fa-info-circle text-blue-500 text-xl mt-1"></i>
                            </div>
                            <div className="ml-4 w-full">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">Para garantizar un armado perfecto, recordá estos detalles:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-blue-500 mt-1 mr-3"></i>
                                        <span className="text-blue-800">Los muebles <strong>no deben tener cola vinílica</strong> (pegamento) aplicada. 🚫🧴</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-blue-500 mt-1 mr-3"></i>
                                        <span className="text-blue-800">Deben contar con sus <strong>tornillos originales</strong>. 🔩</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check text-blue-500 mt-1 mr-3"></i>
                                        <span className="text-blue-800">La madera debe estar <strong>libre de humedad</strong>. 🪵💧</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Estamos listos para ayudarte a instalarte de la mejor manera! 🤗</h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            ¡Escribinos! Te asesoramos de forma gratuita para que tu mudanza sea rápida, segura y sin preocupaciones.
                        </p>
                        <Link target="_blank"
                            href={whatsappHref}
                            className="inline-flex items-center justify-center gap-2 transition font-semibold bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            <i className="fab fa-whatsapp text-2xl"></i>
                            Consultar por WhatsApp
                        </Link>
                    </div>
                </div>
            </ServicioLayout>
            <Footer />
        </main>
    );
}

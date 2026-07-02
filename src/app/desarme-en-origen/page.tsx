import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import DesarmeList from "./components/DesarmeList";
import Link from "next/link";
import { whatsappURL } from "@utils/whatsapp";

export default function DesarmeEnOrigenPage() {
    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por el servicio de Desarme en Origen`);

    return (
        <main>
            <NavigatorSection path={"/landing#servicios"} />
            <ServicioLayout
                title="Desarme en Origen"
                description="Desmontaje profesional de tus muebles."
                id="desarme-en-origen"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-700 text-center mb-10">
                        Si contratas nuestro servicio <span className="font-semibold text-blue-600">intermedio o full</span>, nuestros operarios se encargarán del desarme de tus muebles en el lugar de origen, facilitando tu mudanza. Realizamos el desmontaje de:
                    </p>
                </div>
                
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-12">
                    <DesarmeList />
                </div>
                
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm mb-12">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <i className="fas fa-exclamation-triangle text-amber-500 text-xl mt-1"></i>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-amber-800 mb-2">Requisito indispensable</h3>
                                <p className="text-amber-700 text-base">
                                    Para garantizar un servicio seguro y exitoso, los muebles deben estar en buen estado, contar con sus tornillos originales y <strong>no deben haber sido fijados con cola vinílica (pegamento)</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas este servicio?</h3>
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

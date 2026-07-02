import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import Link from "next/link";
import Image from "next/image";
import { whatsappURL } from "@utils/whatsapp";

export default function MaterialesPage() {
    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por los materiales de embalaje`);

    return (
        <main>
            <NavigatorSection path={"/landing#servicios"} />
            <ServicioLayout
                title="Materiales"
                description="¡Cuidamos todo desde el inicio!"
                id="materiales"
            >
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                        <div className="relative h-72 md:h-auto md:w-1/2 md:min-h-[400px]">
                            <Image
                                src="/materiales.png"
                                alt="Operarios trabajando con materiales de embalaje"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-certificate text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Normas ISO 9001</h3>
                            </div>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Utilizamos insumos y materiales bajo estricta certificación de calidad. Esto nos permite asegurar la <strong>máxima protección</strong> de tus pertenencias durante todo el proceso de embalaje y transporte, garantizando un servicio seguro de principio a fin.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                                <h4 className="font-semibold text-gray-800 mb-4">Nuestro equipamiento incluye:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-green-500 mr-3"></i> Cajas doble corrugado
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-green-500 mr-3"></i> Cinta adhesiva de alta resistencia
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fas fa-check-circle text-green-500 mr-3"></i> Film burbuja protector
                                    </li>
                                </ul>
                            </div>

                            <Link target="_blank"
                                href={whatsappHref}
                                className="inline-flex items-center justify-center gap-2 transition font-semibold bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-full text-lg shadow-md hover:shadow-lg w-full transform hover:-translate-y-1">
                                <i className="fab fa-whatsapp text-2xl"></i>
                                Consultar por Insumos
                            </Link>
                        </div>
                    </div>
                </div>
            </ServicioLayout>
            <Footer />
        </main>
    );
}

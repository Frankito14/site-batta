import Image from "next/image"
import Link from "next/link"
import { whatsappURL } from "@utils/whatsapp";

type MudanzaModalProps = {
    iconClassName: string,
    bgClassName: string,
    title: string,
    description: string,
    features: string[]
}

export default function MudanzaModal({ iconClassName, bgClassName, title, description, features }: MudanzaModalProps) {
    return (
        <div className={`w-full md:w-96 ${bgClassName} rounded-xl shadow-2xl`}>
            <div className="text-center pt-8">
                <i className={`${iconClassName} text-8xl`}></i>
            </div>
            <div className="p-6 pt-3 pb-0 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-700 text-md mb-2">
                    {description}
                </p>
            </div>
            <div className="p-2  px-4">
                <ul className="px-4 mb-6">
                    {features.map((feature, index) =>

                        <li key={index} className="flex items-center py-1">
                            <i className="fas fa-check-circle text-green-600 mr-3"></i>
                            <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex justify-between p-6 pt-0 gap-4">
                <a target="_blank"
                    href={whatsappURL(`¡Hola! Me gustaría recibir una cotización para el servicio: ${title}`)}
                    className="font-semibold flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2  shadow-sm shadow-green-600/20 hover:cursor-pointer">
                    <i className="fab fa-whatsapp text-3xl"></i>
                    Ir a WhatsApp
                </a>
            </div>
        </div>
    )
}
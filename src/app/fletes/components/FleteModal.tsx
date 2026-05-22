import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image";
import { whatsappURL } from "@utils/whatsapp";

type FleteModalProps = {
    img: StaticImageData,
    title: string,
    description: string,
    whatsappMsg: string
}

export default function FleteModal({ img, title, description, whatsappMsg }: FleteModalProps) {
    return (
        <div className="w-full md:w-96  bg-white rounded-xl shadow-2xl">
            <Image
                src={img}
                alt={title}
                className="margin-auto rounded-t-xl"
            />
            <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">
                    {description}
                </p>
            </div>
            <div className="flex justify-between p-6 gap-4">
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
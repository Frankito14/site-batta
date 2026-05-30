"use client"

import Link from "next/link"
import { whatsappURL } from "@utils/whatsapp";
import { useModal } from '@context/ModalContext';
import MudanzaModal from "./MudanzaModal";

type MudanzaCardProps = {
    iconClassName: string,
    bgClassName: string
    title: string,
    description: string,
    features: string[]
}

export default function MudanzaCard({ iconClassName, bgClassName, title, description, features }: MudanzaCardProps) {

    const { showModal } = useModal();

    const whatsappHref = whatsappURL(`¡Hola! Me gustaría recibir una cotización para el servicio: ${title} (Mudanzas)`)

    const handleShow = () => {
        showModal(
            <MudanzaModal
                iconClassName={iconClassName}
                bgClassName={bgClassName}
                title={title}
                description={description}
                features={features}
            />
        );
    };

    return (
        <div className={`${bgClassName} p-6 rounded-lg shadow-lg border border-gray-200" role="article`}>
            <div className="mb-4 text-center">
                <div className="py-8 ">
                    <i className={`${iconClassName} text-9xl  `}></i>
                </div>
                <div className="w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="h-auto md:h-12 text-gray-600 text-sm mb-4">
                        {description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 mt-4">
                        <button onClick={() => handleShow()}
                            className="flex-1 lg:w-auto font-semibold bg-sky-400 hover:bg-sky-600 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shadow-green-600/20 hover:cursor-pointer">
                            <i className="fa-solid fa-circle-info text-xl"></i>
                            Ver detalles
                        </button>
                        <Link target="_blank"
                            href={whatsappHref}
                            className="flex-1 lg:w-auto transition font-semibold bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                            <i className="fab fa-whatsapp text-xl"></i>
                            Ir a WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
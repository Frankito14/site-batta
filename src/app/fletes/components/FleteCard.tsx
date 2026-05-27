"use client"

import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image";
import type { Specification } from "@/app/fletes/types/fletes.types";
import { useModal } from '@context/ModalContext';
import FleteModal from "./FleteModal";
import { whatsappURL } from "@utils/whatsapp";


type FleteCardProps = {
    img: StaticImageData,
    title: string,
    specs: Specification[],
    description: string,
    whatsappMsg: string
    phone: string
}

export default function FleteCard({ img, specs, title, description, phone }: FleteCardProps) {

    const { showModal } = useModal();

    const whatsappHref = whatsappURL(`¡Hola! Me gustaría recibir una cotización para el servicio: ${title} (Fletes y Flota)`, phone)

    const handleShow = () => {
        showModal(
            <FleteModal
                img={img}
                title={title}
                description={description}
                whatsappMsg={whatsappHref}
            />
        );
    };


    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200" role="article">
            <div className="flex flex-col md:flex-row items-center gap-6  mb-4">
                <div className="flex-1">
                    <Image
                        src={img}
                        alt="Camión de mudanza pequeño"
                        className="w-full rounded-lg m-auto object-cover"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Especificaciones del vehículo de carga:
                    </p>
                    <div className="space-y-2">
                        {specs.map((spec, index) =>
                            <div
                                key={index}
                                className="bg-blue-950 text-white p-1 rounded-xl flex items-center gap-4 w-full shadow-lg">
                                <div
                                    className="bg-white/10 p-3 rounded-full flex items-center justify-center w-12 h-12">
                                    <i className="fa-solid fa-ruler-horizontal text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xs font-semibold uppercase opacity-90">{spec.feature}:</h3>
                                    <p className="text-sm font-bold">{spec.value}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button onClick={() => handleShow()}
                            className="flex-1 md:w-auto font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shadow-green-600/20 hover:cursor-pointer">
                            <i className="fa-solid fa-circle-info text-xl"></i>
                            Ver detalles
                        </button>

                        <Link target="_blank"
                            href={whatsappHref}
                            className="flex-1 md:w-auto font-semibold bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                            <i className="fab fa-whatsapp text-xl"></i>
                            Ir a WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
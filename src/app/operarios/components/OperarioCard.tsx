
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { whatsappURL } from "@utils/whatsapp";

type OperarioCardProps = {
    icon: string,
    title: string,
    description: string,
    img: StaticImageData | string | any
}

export default function OperarioCard({ icon, title, description, img }: OperarioCardProps) {

    const whatsappHref = whatsappURL(`¡Hola! Me gustaría consultar por el servicio de Operarios: ${title}`);

    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden" role="article">
            <div className="relative w-full h-48 md:h-56">
                <Image src={img} alt={title} className="w-full h-full object-cover brightness-50" />
            </div>
            <div className="flex-grow flex flex-col p-6 pt-6">
                <div className="mb-4 text-center w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                    <Link target="_blank"
                        href={whatsappHref}
                        className="w-full transition font-semibold bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                        <i className="fab fa-whatsapp text-xl"></i>
                        Consultar por WhatsApp
                    </Link>
                </div>
            </div>
        </div>
    )
}
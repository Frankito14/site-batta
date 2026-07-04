import OperarioCard from "./OperarioCard"
import MudanzaImage from "@assets/images/servicios/operarios_mudanza.webp"
import DescargaImage from "@assets/images/servicios/operarios_descarga.webp"
import LogisticaImage from "@assets/images/servicios/operarios_logistica.webp"


const operariosData = [
    {
        icon: "fa-solid fa-box-open",
        title: "Mudanzas",
        img: MudanzaImage,
        description: "Cuidamos tus pertenencias como si fueran propias para que tu traslado sea tranquilo y seguro."
    },
    {
        icon: "fa-solid fa-truck-ramp-box",
        title: "Descarga de containers",
        img: DescargaImage,
        description: "Agilizamos tu operativa con un equipo experto en descarga rápida y eficiente."
    },
    {
        icon: "fa-solid fa-industry",
        title: "Logística interna",
        img: LogisticaImage,
        description: "Optimizamos tu fábrica con personal capacitado en control de stock, picking y gestión de almacén."
    }
]

export default function OperariosList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operariosData.map((operarioData, index) => (
                <OperarioCard
                    key={index}
                    img={operarioData.img}
                    icon={operarioData.icon}
                    title={operarioData.title}
                    description={operarioData.description}
                />
            ))}
        </div>
    )
}   
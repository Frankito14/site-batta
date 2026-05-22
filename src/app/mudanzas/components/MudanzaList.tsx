import MudanzaCard from "./MudanzaCard"

const mudanzaData = [
    {
        iconClassName: "fas fa-truck text-sky-400",
        bgClassName: "bg-sky-100",
        title: "Servicio Básico",
        description: "Transporte confiable y eficiente.",
        features: [
            "Transporte seguro, unidades cero kilómetro.",
            "Carga y descarga profesional",
            "Entrega de cajas+cintas (anticipada).",
            "No incluye embalaje de los muebles",
            "Abona en efectivo o Pago",
            "No incluye el desarme y el ensamble de muebles"
        ]
    },
    {
        iconClassName: "fas fa-star text-yellow-400",
        bgClassName: "bg-white",
        title: "Servicio Mediano",
        description: "La solución intermedia perfecta.",
        features: [
            "Todo lo del servicio normal.",
            "Embalaje profesional selectivo (muebles clave)",
            "Desarme de camas, racks de TV, muebles, bibliotecas y estanterías en origen.",
            "Ensamble de tus muebles para su inmediato uso.",
            "Ensamble de racks de TV, bibliotecas y estanterías."
        ]
    },
    {
        iconClassName: "fas fa-rocket text-sky-400",
        bgClassName: "bg-sky-100",
        title: "Servicio Full",
        description: "La solución total para el cliente exigente.",
        features: [
            "TODO INCLUIDO: Normal + Mediano + Full",
            "Embalaje Integral de TODO el domicilio (Muebles + Enseres Personales Pequeños).",
            "Desarme Completo de TODO el mobiliario (camas/mesas/armarios/cunas).",
            "Ensamble Completo y ubicación en el nuevo hogar.",
            "Servicio VIP para clientes exigentes"
        ]
    }
]

export default function MudanzaList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mudanzaData.map((mudanzaData, index) => (
                <MudanzaCard
                    key={index}
                    bgClassName={mudanzaData.bgClassName}
                    iconClassName={mudanzaData.iconClassName}
                    features={mudanzaData.features}
                    title={mudanzaData.title}
                    description={mudanzaData.description}
                />
            ))}
        </div>
    )
}   
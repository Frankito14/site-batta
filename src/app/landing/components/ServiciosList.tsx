import ServicioLinkCard from "./ServicioLinkCard";

const serviciosData = [
    {
        title: "Fletes y Flota",
        description: "Transporte seguro y confiable para todas tus necesidades de carga.",
        iconClassName: "fas fa-truck-moving",
        href: "/fletes",
        id: "fletes"
    },
    {
        title: "Mudanzas",
        description: "Planificación y gestión integral de tu cadena de suministro.",
        iconClassName: "fas fa-route",
        href: "/mudanzas",
        id: "mudanzas"
    },
    {
        title: "Operarios",
        description: "Personal especializado para carga, descarga y manipulación.",
        iconClassName: "fas fa-users",
        href: "",
        id: "operarios"
    },
    {
        title: "Servicio de Embalaje",
        description: "Protección profesional para tus productos durante el transporte.",
        iconClassName: "fas fa-box-open",
        href: "",
        id: "servicio-de-embalaje"
    },
    {
        title: "Desarme en Origen",
        description: "Desmontaje profesional de tus muebles: Camas • Cunas • Rack TV • Muebles.",
        iconClassName: "fas fa-tools",
        href: "",
        id: "desarme-en-origen"
    },
    {
        title: "Armado en Destino",
        description: "Montaje en tu nuevo hogar de Camas • Muebles • Rack TV • Cunas.",
        iconClassName: "fas fa-couch",
        href: "",
        id: "armado-en-destino"
    },
    {
        title: "Entrega de Kits",
        description: "Llevamos a tu domicilio kits de embalaje para que puedas dar inicio al embalaje de enseres personales pequeños.",
        iconClassName: "fas fa-dolly",
        href: "",
        id: "entrega-de-kits-para-mudanza"
    },
    {
        title: "Materiales",
        description: "Todo lo necesario para embalar: Cajas doble corrugado • Cinta adhesiva común • Film burbuja • Cintas con leyenda fragil.",
        iconClassName: "fas fa-tape",
        href: "",
        id: "materiales"
    }
];

export default function ServiciosList() {
    return (
        <>
            {serviciosData.map((servicio) => (
                <ServicioLinkCard
                    key={servicio.id}
                    title={servicio.title}
                    description={servicio.description}
                    iconClassName={servicio.iconClassName}
                    href={servicio.href}
                    id={servicio.id}
                />
            ))}
        </>
    )
}   
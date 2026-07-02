import EntregaKitsCard from "./EntregaKitsCard"

const entregaKitsData = [
    {
        icon: "fa-solid fa-box-open",
        title: "Básico",
    },
    {
        icon: "fa-solid fa-truck-ramp-box",
        title: "Intermedio",
    },
    {
        icon: "fa-solid fa-industry",
        title: "Full",
    }
]

export default function EntregaKitsList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entregaKitsData.map((entregaKitData, index) => (
                <EntregaKitsCard
                    key={index}
                    icon={entregaKitData.icon}
                    title={entregaKitData.title}
                />
            ))}
        </div>
    )
}   
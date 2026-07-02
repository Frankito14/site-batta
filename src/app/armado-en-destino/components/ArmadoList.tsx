import ArmadoCard from "./ArmadoCard";

const armadoItems = [
    { icon: "fas fa-bed", title: "Camas y Camas box" },
    { icon: "fas fa-table", title: "Mesas" },
    { icon: "fas fa-tv", title: "Racks de TV" },
    { icon: "fas fa-door-closed", title: "Placares y armarios" },
    { icon: "fas fa-baby-carriage", title: "Cunas" }
];

export default function ArmadoList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {armadoItems.map((item, index) => (
                <ArmadoCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                />
            ))}
        </div>
    );
}

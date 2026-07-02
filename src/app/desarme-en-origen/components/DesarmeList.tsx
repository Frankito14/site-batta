import DesarmeCard from "./DesarmeCard";

const desarmeItems = [
    { icon: "fas fa-bed", title: "Camas (bases)" },
    { icon: "fas fa-baby-carriage", title: "Cunas" },
    { icon: "fas fa-door-closed", title: "Placards y armarios" },
    { icon: "fas fa-book", title: "Bibliotecas, estanterías y repisas" },
    { icon: "fas fa-tv", title: "Rack de TV" }
];

export default function DesarmeList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {desarmeItems.map((item, index) => (
                <DesarmeCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                />
            ))}
        </div>
    );
}

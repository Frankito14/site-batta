type ServicioCardProps = {
    title: string,
    description: string,
    iconClassName: string
}

export default function ServicioCard({ title, description, iconClassName }: ServicioCardProps) {
    return (

        <div
            className="p-6"
            role="article"
            aria-label={`Servicio de ${title}`}
        >
            <div className="text-3xl text-blue-600 mb-4" aria-hidden="true">
                <i className={iconClassName}></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-xs">
                {description}
            </p>
        </div>

    )
}
import ServicioCard from "./ServicioCard"
import Link from 'next/link'

type ServicioLinkCardProps = {
    title: string,
    description: string,
    iconClassName: string
    href: string,
    id: string
}

export default function ServicioLinkCard({ title, description, iconClassName, href, id }: ServicioLinkCardProps) {
    return (
        <Link
            href={href}
            id={id}
            className={`service-card max-h-48 rounded-lg shadow-lg border border-gray-200 hover:translate-y-[-8px] transition  ${href ? "hover:bg-blue-50  hover:cursor-pointer " : "hover:cursor-default"}   ${id}`}
            role="article"
            aria-label={`Servicio de ${id}`}
        >
            <ServicioCard
                title={title}
                description={description}
                iconClassName={iconClassName}
            />
        </Link>
    )
}
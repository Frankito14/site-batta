import React from "react"

type ServicioLayoutProps = {
    title: string,
    description: string,
    id: string,
    children: React.ReactNode
}

export default function ServicioLayout({ title, description, id, children }: ServicioLayoutProps) {
    return (
        <section id={id} className="mt-10 py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}
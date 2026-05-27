export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative hero-bg min-h-dvh md:min-h-dvh flex items-center justify-center text-white overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-900/60 to-gray-950/70 z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32">



                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Transportes Batta
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 mt-2 pb-4 ">
                        Fletes y Mudanzas
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-normal text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Expertos en traslados residenciales y comerciales con camión propio. Nos encargamos de todo:
                    <span className="text-white font-medium"> Embalaje, carga y descarga segura.</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">

                    <a
                        href="https://api.whatsapp.com/send/?phone=541150545987&text=%C2%A1HOLA%21+me+gustar%C3%ADa+recibir+una+cotizaci%C3%B3n+espero+su+respuesta+%C2%A1MUCHAS+GRACIAS%21&type=phone_number&app_absent=0"
                        aria-label="Solicitar cotización por WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-600/40 text-center flex items-center justify-center space-x-2 group"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                        </svg>
                        <span>Solicitar Cotización</span>
                    </a>

                    <a
                        href="#servicios"
                        aria-label="Ir a sección de servicios"
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20  backdrop-blur-sm transition-all duration-300 text-center"
                    >
                        Ver Servicios
                    </a>

                </div>
            </div>
        </section>
    );
}
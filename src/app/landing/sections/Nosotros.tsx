export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con más de 10 años de experiencia brindando compromiso y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 mb-6">
              Somos un equipo de trabajo dedicados al servicio de logística,
              fletes y mudanzas. Contamos con mas de 10 años de trayectoria,
              brindando compromiso y dedicación a cada cliente.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestros Valores
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i
                  className="fas fa-check-circle text-blue-600 mt-1 mr-3"
                  aria-hidden="true"
                ></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Confiabilidad</h4>
                  <p className="text-gray-600">
                    Cumplimos nuestras promesas de entrega
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i
                  className="fas fa-check-circle text-blue-600 mt-1 mr-3"
                  aria-hidden="true"
                ></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Compromiso</h4>
                  <p className="text-gray-600">
                    Asumimos cada trabajo con responsabilidad.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i
                  className="fas fa-check-circle text-blue-600 mt-1 mr-3"
                  aria-hidden="true"
                ></i>
                <div>
                  <h4 className="font-semibold text-gray-900">Dedicación</h4>
                  <p className="text-gray-600">
                    Ponemos pasión y esfuerzo en cada detalle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

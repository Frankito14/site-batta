import ServiciosList from "../components/ServiciosList";

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones logísticas completas adaptadas a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ServiciosList />
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Principales
            </h3>
            <p className="text-lg text-gray-600">
              Elige el servicio que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="service-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="text-5xl text-blue-600 mb-4">
                  <i className="fas fa-truck"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicio Normal</h3>
                <p className="text-gray-600">
                  Ideal para servicio de mudanza estándar.
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Transporte seguro, unidades cero kilómetro.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Carga y descarga incluida. Todo el personal con Art.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Entrega de cajas+cintas en tu domicilio. Se entregan con antelación a tu mudanza.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">No incluye embalaje de los muebles,servicio económico.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Abona en efectivo o Mercado Pago al finalizar tu mudanza.</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-2 border-yellow-200" role="article" aria-label="Servicio Completo de mudanzas">
              <div className="text-center mb-6">
                <div className="text-5xl text-yellow-600 mb-4" aria-hidden="true">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicio Completo</h3>
                <p className="text-gray-600">
                  Servicio full para clientes exigentes.
                </p>
              </div>

              <ul className="space-y-3 mb-6" role="list" aria-label="Caractersticas del servicio completo">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3" aria-hidden="true"></i>
                  <span className="text-gray-700">Todo lo del servicio normal</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3" aria-hidden="true"></i>
                  <span className="text-gray-700">Embalaje profesional por nuestros operarios con mantas y strech industrial para proteger todos tus muebles.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3" aria-hidden="true"></i>
                  <span className="text-gray-700">Desarme de camas/mesas/muebles/cunas en origen.</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3" aria-hidden="true"></i>
                  <span className="text-gray-700">Ensamble de camas/mesas/muebles/cunas en tu nuevo hogar para que tengas todo listo para usar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
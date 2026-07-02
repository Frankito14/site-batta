import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import EntregaKitsList from "./components/EntregaKitsList";

export default function EntregaKitsPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <ServicioLayout
        title="Entrega de Kits"
        description="En Transportes Batta tenemos 3 soluciones pensadas a tu medida:"
        id="entrega-de-kits-para-mudanza"
      >
        <EntregaKitsList />
        <div className="mt-12 w-full  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600 mx-auto">
              ¡Lo mejor de todo! En los tres servicios, te bonificamos las cajas y cintas dentro de CABA y alrededores.
            </p>
            <h3 className="mt-12 text-xl md:text-xl font-bold text-gray-900 mb-4">¿Cómo seguimos?</h3>
            <p className="text-xl text-gray-600  mx-auto">
              ¡Llamanos! Te escuchamos con atención y te asesoramos de forma gratuita. Si cerramos la operación, te enviamos los insumos directo a tu casa sin que tengas que moverte.
            </p>
            <p className="text-xl mt-8 mx-auto font-bold text-blue-500">
              ¡Estamos para ayudarte!
            </p>
          </div>
        </div>
      </ServicioLayout>
      <Footer />
    </main>
  );
}

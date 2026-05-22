import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import FletesList from "./components/FletesList";

export default function FletesPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <ServicioLayout
        title="Fletes y Flota"
        description="Conocé nuestos vehiculos y servicios de transporte para mudanzas y fletes."
        id="fletes"
      >
        <FletesList />
      </ServicioLayout>
      <Footer />
    </main>
  );
}

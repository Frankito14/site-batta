import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import MudanzaList from "./components/MudanzaList";

export default function MudanzasPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <ServicioLayout
        title="Mudanzas"
        description="Conocé nuestros servicios de mudanza."
        id="mudanzas"
      >
        <MudanzaList />
      </ServicioLayout>
      <Footer />
    </main>
  );
}

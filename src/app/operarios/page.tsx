import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import ServicioLayout from "../layouts/ServicioLayout";
import OperarioList from "./components/OperarioList";

export default function MudanzasPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <ServicioLayout
        title="Operarios"
        description="¡Contamos con el equipo ideal para lo que necesites! En nuestra empresa nos especializamos en ofrecerte soluciones a medida con personal experto en cada área:"
        id="operarios"
      >
        <OperarioList />
      </ServicioLayout>
      <Footer />
    </main>
  );
}

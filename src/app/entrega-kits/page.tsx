import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import HeroKits from "./components/HeroKits";

export default function EntregaKitsPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <HeroKits />
      <Footer />
    </main>
  );
}


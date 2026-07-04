import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import HeroArmado from "./components/HeroArmado";

export default function ArmadoEnDestinoPage() {

    return (
        <main>
            <NavigatorSection path={"/landing#servicios"} />
            <HeroArmado />
            <Footer />
        </main>
    );
}

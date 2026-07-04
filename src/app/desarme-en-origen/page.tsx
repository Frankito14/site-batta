import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import HeroDesarme from "./components/HeroDesarme";

export default function DesarmeEnOrigenPage() {
    return (
        <main>
            <NavigatorSection path={"/landing#servicios"} />
            <HeroDesarme />
            <Footer />
        </main>
    );
}

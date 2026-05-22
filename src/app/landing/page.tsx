//Components
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Servicios from "./sections/Servicios";
import Resenas from "./sections/Resenas";
import Cobertura from "./sections/Cobertura";
import Contacto from "./sections/Contacto";
import Footer from "./sections/Footer";
import WhatsAppFloat from "./sections/WhatsAppFloat";
import Navigator from "../layouts/Navigator/Navigator";

//Sections
export default function LandingPage() {
  return (
    <main>
      <Navigator />
      <Hero />
      <Nosotros />
      <Servicios />
      <Resenas />
      <Cobertura />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

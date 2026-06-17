import Footer from "../landing/sections/Footer";
import NavigatorSection from "../layouts/Navigator/NavigatorSection";
import HeroSemirremolque from "./components/HeroSemirremolque";


export default function MudanzasPage() {
  return (
    <main>
      <NavigatorSection path={"/landing#servicios"} />
      <HeroSemirremolque />
      <Footer />
    </main>
  );
}

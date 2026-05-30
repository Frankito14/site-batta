import ResenaSlider from "../components/ResenasSlider";
import review1 from "@/assets/images/review1.webp";
import review2 from "@/assets/images/review2.webp";
import review3 from "@/assets/images/review3.webp";
import review4 from "@/assets/images/review4.webp";
import review5 from "@/assets/images/review5.webp";
import review6 from "@/assets/images/review6.png";
import review7 from "@/assets/images/review7.png";
import review8 from "@/assets/images/review8.png";

const reviewImages = [review1, review2, review3, review4, review5, review6, review7, review8];

export default function Resenas() {
  return (
    <section id="resenas" className="py-20 bg-gray-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reseñas de nuestros clientes
          </h2>
          {/* Llenamos el párrafo con un texto descriptivo */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias de quienes ya confían en nosotros.
            Su satisfacción es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="drop-shadow-sm backend-slider-wrapper">
          <ResenaSlider images={reviewImages} />
        </div>

        <div className="text-center mt-12 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="flex text-amber-400 text-lg">★★★★★</div>
          <span>Calificación promedio de 5/5 basada en nuestros clientes</span>
        </div>
      </div>
    </section>
  );

}
import ResenaSlider from "../components/ResenasSlider";
import review1 from "@/assets/images/review1.webp";
import review2 from "@/assets/images/review2.webp";
import review3 from "@/assets/images/review3.webp";
import review4 from "@/assets/images/review4.webp";
import review5 from "@/assets/images/review5.webp";

const reviewImages = [review1, review2, review3, review4, review5];

export default function Resenas() {
  return (
    <section id="resenas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reseñas de nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
        </div>
        <ResenaSlider images={reviewImages} />
      </div>
    </section>
  );
}
export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestra Cobertura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
        </div>

        <div className="w-full">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6994122318365!2d-58.508508000000006!3d-34.6117617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb779bb020ba5%3A0x9cadb26a3c1db77a!2sMudanzas-fletes-logistica!5e0!3m2!1ses!2sar!4v1776862461614!5m2!1ses!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
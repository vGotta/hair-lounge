import { FaCut, FaPalette, FaSpa } from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-12 font-serif">Nos Services</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Coupe */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaCut className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Coupe</h3>
          <p className="text-gray-700">
            Des coupes personnalisées pour chaque style et morphologie.
          </p>
        </div>

        {/* Coloration */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaPalette className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Coloration</h3>
          <p className="text-gray-700">
            Coloration professionnelle et conseils adaptés à vos envies.
          </p>
        </div>

        {/* Soins */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaSpa className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Soins</h3>
          <p className="text-gray-700">
            Soins capillaires pour une chevelure saine et brillante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
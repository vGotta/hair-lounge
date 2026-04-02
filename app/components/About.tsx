import { FaBullseye, FaHeart, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 px-6 text-center py-24"
    >
      <h2 className="text-4xl font-bold mb-6 font-serif">À propos</h2>
      <p className="max-w-2xl mb-12 text-gray-700">
        Passionnée par la coiffure depuis plus de 10 ans, notre coiffeuse vous accompagne
        pour révéler votre beauté naturelle grâce à un service personnalisé et attentionné.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Mission */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaBullseye className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-700 text-center">
            Apporter un service personnalisé et de qualité à chaque client.
          </p>
        </div>

        {/* Valeurs */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaHeart className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Valeurs</h3>
          <p className="text-gray-700 text-center">
            Professionnalisme, créativité et bienveillance.
          </p>
        </div>

        {/* Expérience */}
        <div className="w-64 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <FaStar className="text-purple-600 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Expérience</h3>
          <p className="text-gray-700 text-center">
            Plus de 10 ans d’expérience dans les salons haut de gamme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
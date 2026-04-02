import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="bg-linear-to-r from-pink-200 via-purple-200 to-indigo-200 h-screen flex flex-col justify-center items-center text-center px-4">
      {" "}
      <h1 className="text-5xl font-bold mb-4 text-gray-800 font-serif">
        Sublimez votre style avec notre coiffeuse professionnelle
      </h1>
      <p className="text-lg mb-6 text-gray-700">
        Coupe, coloration et soins personnalisés pour révéler votre beauté
      </p>
      <Link
        href="/contact"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
      >
        Prendre rendez-vous
      </Link>
    </section>
  );
};

export default Hero;

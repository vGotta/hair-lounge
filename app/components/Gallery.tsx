import Image from "next/image";

const photos = [
  { src: "/images/hair1.jpg", alt: "Réalisation coiffure 1" },
  { src: "/images/hair2.jpg", alt: "Réalisation coiffure 2" },
  { src: "/images/hair3.jpg", alt: "Réalisation coiffure 3" },
  { src: "/images/hair4.jpg", alt: "Réalisation coiffure 4" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4 font-serif">Galerie</h2>
      <p className="text-gray-500 mb-12 max-w-xl mx-auto text-sm">
        Quelques-unes de nos réalisations — chaque coiffure est unique.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
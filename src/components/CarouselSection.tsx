import { useState } from "react";

const fishData = [
  {
    id: 1,
    name: "Peixe-Palhaço",
    description: "Famoso por sua relação simbiótica com anêmonas.",
    image: "https://via.placeholder.com/300x200?text=Peixe-Palhaço",
  },
  {
    id: 2,
    name: "Cavalo-Marinho",
    description: "Conhecido por sua aparência única e hábitos monogâmicos.",
    image: "https://via.placeholder.com/300x200?text=Cavalo-Marinho",
  },
  {
    id: 3,
    name: "Tubarão-Baleia",
    description: "O maior peixe do oceano, mas inofensivo para humanos.",
    image: "https://via.placeholder.com/300x200?text=Tubarão-Baleia",
  },
  {
    id: 4,
    name: "Peixe-Betta",
    description: "Popular por suas cores vibrantes e comportamento territorial.",
    image: "https://via.placeholder.com/300x200?text=Peixe-Betta",
  },
  {
    id: 5,
    name: "Peixe-Leão",
    description: "Espécie venenosa com nadadeiras espetaculares.",
    image: "https://via.placeholder.com/300x200?text=Peixe-Leão",
  },
];

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fishData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === fishData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 bg-primaryBlue">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-vibrantYellow mb-6">
          Conheça Nossos Amigos do Oceano
        </h2>
        <div className="relative max-w-lg mx-auto">
          <div className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={fishData[currentIndex].image}
              alt={fishData[currentIndex].name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-primaryBlue">
                {fishData[currentIndex].name}
              </h3>
              <p className="text-secondaryBlue">{fishData[currentIndex].description}</p>
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orangeAccent text-white p-2 rounded-full shadow-md hover:bg-vibrantRed"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orangeAccent text-white p-2 rounded-full shadow-md hover:bg-vibrantRed"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
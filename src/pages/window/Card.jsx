import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Card({ images = [], name, sizes = [] }) {
  const [showAll, setShowAll] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [nextImgIndex, setNextImgIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const [isSliding, setIsSliding] = useState(false);
  const intervalRef = useRef(null);

  const visibleSizes = showAll ? sizes : sizes.slice(0, 4);

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [images.length]);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      slideTo((currentImgIndex + 1) % images.length);
    }, 4000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  const slideTo = (index) => {
    if (index === currentImgIndex) return;
    setDirection(index > currentImgIndex ? "left" : "right");
    setNextImgIndex(index);
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImgIndex(index);
      setIsSliding(false);
    }, 400);
  };

  const handlePrev = () => {
    const prev = (currentImgIndex - 1 + images.length) % images.length;
    slideTo(prev);
  };

  const handleNext = () => {
    const next = (currentImgIndex + 1) % images.length;
    slideTo(next);
  };

  return (
    <article className="w-[420px] min-h-[500px] border rounded-[15px] bg-[#f5f5f5] p-[20px] flex flex-col items-center gap-[15px]">
      {/* Image Slider */}
      <div
        className="relative w-full h-[280px] overflow-hidden rounded-xl"
        onMouseEnter={stopSlider}
        onMouseLeave={startSlider}
      >
        {/* Old image */}
        {isSliding && (
          <img
            src={images[currentImgIndex]}
            alt={`${name} image ${currentImgIndex + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${
              direction === "left" ? "-translate-x-full" : "translate-x-full"
            }`}
          />
        )}

        {/* New image */}
        <img
          src={images[isSliding ? nextImgIndex : currentImgIndex]}
          alt={`${name} image ${isSliding ? nextImgIndex + 1 : currentImgIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500"
        />

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              aria-label={`Go to image ${index + 1}`}
              onClick={() => slideTo(index)}
              className={`w-[10px] h-[10px] rounded-full transition ${
                currentImgIndex === index && !isSliding
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous image"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white opacity-10 hover:opacity-100 p-2 rounded-full z-20 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          aria-label="Next image"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white opacity-10 hover:opacity-100 p-2 rounded-full z-20 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product Name */}
      <h2 className="text-xl font-semibold text-red-600 text-center">{name}</h2>

      {/* Sizes */}
      <ul className="w-full text-sm text-gray-700 flex flex-col gap-[5px]" aria-label="Product sizes">
        {visibleSizes.map((size, index) => (
          <li key={`size-${index}`}>{size}</li>
        ))}
      </ul>

      {/* Show more */}
      {sizes.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:underline mt-1 w-fit"
          aria-label={showAll ? "Hide additional sizes" : "Show all sizes"}
        >
          {showAll ? "Yashirish" : "Yana ko‘rsatish"}
        </button>
      )}
    </article>
  );
}

import { useCallback, useEffect, useMemo, useState } from "react";
import ChevronIcons from "../assets/icons/ChevronIcons";
import doubleAImage from "../assets/images/DoubleA.png";
import financialImage from "../assets/images/Financial.png";
import postitImage from "../assets/images/Postit.png";
import PreOrderImage from "../assets/images/PreOrder.png";
import colourpencilImage from "../assets/images/colourpencil.png";
import parkerImage from "../assets/images/parker.png";
const { ChevronLeftIcon, ChevronRightIcon } = ChevronIcons;

type CarouselItem = {
  id: number;
  image: string;
  title: string;
};

// Rename to avoid shadowing the prop
const DEFAULT_ITEMS: CarouselItem[] = [
  { id: 1, image: parkerImage,       title: "Carousel Item 1" },
  { id: 2, image: postitImage,       title: "Carousel Item 2" },
  { id: 3, image: PreOrderImage,         title: "Carousel Item 3" },
  { id: 4, image: financialImage,    title: "Carousel Item 4" },
  { id: 5, image: doubleAImage,      title: "Carousel Item 5" },
  { id: 6, image: colourpencilImage, title: "Carousel Item 6" },
];

type CarouselProps = {
  carouselItems?: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = ({ carouselItems: itemsProp }) => {
  // Resolve items once per render
  const items = useMemo(() => itemsProp?.length ? itemsProp : DEFAULT_ITEMS, [itemsProp]);

  // Keep index, not the item object
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  const currentItem = items[currentIndex];

  // Auto-advance slides every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 20000);
    
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="w-full h-full" aria-label="carousel">
      <div className="carousel-container">
        <div className="carousel-item relative">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-[480px] md:h-[300px] lg:h-[480px]  object-fill object-center aspect-auto"
          />

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition-colors"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition-colors"
            onClick={goNext}
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className="carousel-item-content mx-auto flex items-center justify-center gap-2 py-4">
            {items.map((item, idx) => (
              <button
                key={item.id}
                className={`carousel-item-button h-3 md:h-4 transition-all ${
                  idx === currentIndex ? "w-6 md:w-8 bg-primary-2" : "w-3 md:w-4 bg-gray-400"
                } rounded-full`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
                {/*** Thumbnails ***/ }
          {/* <div className="carousel-thumbnails hidden md:flex justify-center gap-2 mt-4">
            {items.map((item, idx) => (
              <button
                key={item.id}
                className={`w-16 h-16 overflow-hidden rounded ${
                  idx === currentIndex ? "ring-2 ring-primary-2" : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select slide ${idx + 1}`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
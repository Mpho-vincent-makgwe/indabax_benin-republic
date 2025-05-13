// src/components/Carousel.tsx

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  direction: 'left' | 'right';
}

const Carousel: React.FC<CarouselProps> = ({ images, direction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        direction === 'left'
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, direction]);

  return (
    <div className="relative w-full overflow-hidden h-64 md:h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : direction === 'left' ? 'translate-x-full' : '-translate-x-full'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

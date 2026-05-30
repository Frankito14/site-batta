'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ResenaSliderProps {
  images: (string | StaticImageData)[];
}

export default function ResenaSlider({ images }: ResenaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance to trigger swipe (in pixels)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isPaused && images.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, images.length]);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    
    setIsPaused(false);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Reseñas de clientes"
    >
      <div 
        className="overflow-hidden rounded-xl shadow-md border border-gray-100 bg-white"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="w-full h-[400px] flex-shrink-0 flex items-center justify-center p-6 md:p-10 select-none"
              role="group"
              aria-roledescription="slide"
              aria-label={`Reseña ${idx + 1} de ${images.length}`}
              aria-hidden={currentIndex !== idx}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Reseña de cliente ${idx + 1} - Google Maps`}
                  className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                  priority={idx === 0}
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Reseña anterior"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <i className="fas fa-chevron-left text-gray-700 text-lg" aria-hidden="true"></i>
      </button>
      <button
        onClick={handleNext}
        aria-label="Siguiente reseña"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <i className="fas fa-chevron-right text-gray-700 text-lg" aria-hidden="true"></i>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2.5" role="tablist" aria-label="Selección de reseñas">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            role="tab"
            aria-label={`Reseña ${idx + 1}`}
            aria-selected={currentIndex === idx}
          ></button>
        ))}
      </div>
    </div>
  );
}
import './CarosselBanner.css'
import React, { useState, useEffect } from 'react';

const CarosselBanner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Troca de imagem a cada 3 segundos

      return () => clearInterval(interval);
  }, [images]);

  return (
      <div className="Carossel-container">
          <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
      </div>
  );
};
export default CarosselBanner

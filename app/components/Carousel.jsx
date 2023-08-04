'use client'
import React, { useState, useEffect } from 'react';

const images = [
  '/images/banner.jpg',
  '/images/banner2movil.png',
  '/images/banner1movil.png',
]; // Lista de rutas de las imágenes a mostrar

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Función para cambiar la imagen actual en intervalos de tiempo
    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    // Configuramos el intervalo para cambiar la imagen cada 3 segundos (3000 ms)
    const intervalId = setInterval(changeImage, 3000);

    // Limpieza del intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const circleContainerStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    bottom: '20px',
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const circleStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'white',
    margin: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={circleContainerStyle}>
        {images.map((image, index) => (
          <span
            key={index}
            onClick={() => goToImage(index)}
            style={{
              ...circleStyle,
              background: currentImage === index ? 'black' : 'white',
            }}
          />
        ))}
      </div>
      <img className="d-block w-100" src={images[currentImage]} alt="" />
    </div>
  );
};

export default Carousel;

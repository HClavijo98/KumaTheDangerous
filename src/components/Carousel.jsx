import React, { useState, useEffect } from 'react'
import './Carousel.css'

export function Carousel ({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(autoSlide)
  }, [interval, images.length])

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className='carousel'>
      <button className='carousel-button left' onClick={handlePrevSlide}>
        &#10094;
      </button>

      <div className='carousel-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className='carousel-image-wrapper' key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='carousel-image' />
          </div>
        ))}
      </div>

      <button className='carousel-button right' onClick={handleNextSlide}>
        &#10095;
      </button>
    </div>
  )
}

import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    function showSlides(n) {
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
      }
    }

    // Mostrar la primera diapositiva al principio
    showSlides(slideIndex);

    // Cambiar de diapositiva cada 10 segundos
    const intervalId = setInterval(() => {
      setSlideIndex(prevIndex => prevIndex + 1);
    }, 10000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div className="slider-container">
      <div className="slide fades">
        <img
          className="slide-image"
          src="/images/cover.jpg"
          alt="Slide 1"
        />
      </div>

      <div className="slide fades">
        <img
          className="slide-image"
          src="/images/cover2.jpg"
          alt="Slide 2"
        />
      </div>

      <div className="slide fades">
        <img
          className="slide-image"
          src="/images/cover3.jpeg"
          alt="Slide 3"
        />
      </div>

      <div className="dot-container">
        <span className="dot" onClick={() => setSlideIndex(1)}></span>
        <span className="dot" onClick={() => setSlideIndex(2)}></span>
        <span className="dot" onClick={() => setSlideIndex(3)}></span>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  return (
    <div className="carousel w-full">
      <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <img src="https://i.ibb.co/ph1zSsY/img1-1.jpg" className="w-full h-[300px]" alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={handlePrevClick} className="btn btn-circle">&lt;</button>
          <button onClick={() => setCurrentSlide(2)} className="btn btn-circle">&gt;</button>
        </div>
      </div>
      <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <img src=" https://i.ibb.co/6vz60YX/img2.jpg" className="w-full h-[300px]" alt="Slide 2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => setCurrentSlide(1)} className="btn btn-circle">&lt;</button>
          <button onClick={() => setCurrentSlide(3)} className="btn btn-circle">&gt;</button>
        </div>
      </div>
      <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <img src="https://i.ibb.co/jgCq4NX/img3.jpg" className="w-full h-[300px]" alt="Slide 3" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => setCurrentSlide(2)} className="btn btn-circle">&lt;</button>
          <button onClick={() => setCurrentSlide(4)} className="btn btn-circle">&gt;</button>
        </div>
      </div>
      <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <img src="https://i.ibb.co/4jdqFPG/img4.jpg" className="w-full h-[300px]" alt="Slide 4" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => setCurrentSlide(3)} className="btn btn-circle">&lt;</button>
          <button onClick={() => setCurrentSlide(1)} className="btn btn-circle">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

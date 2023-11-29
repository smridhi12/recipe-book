import React, { useEffect, useState } from 'react';

const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = 3; 
    setActiveSlide((activeSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (    
    <div style={{paddingLeft:"136px", width:"1391px", height:"486px"}}>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
            <img
              src="https://sortedmedia.com.au/wp-content/uploads/2020/06/DSC0903-scaled.jpg"
              className="d-block w-100"
              alt="Wild Landscape"
            />
          </div>
          <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
            <img
              src= 'https://visualartideas.com/wp-content/uploads/2018/04/Food-Photography-Inspiration.jpg'
              className="d-block w-100"
              alt="Camera"
            />
          </div>
          <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
            <img
              src="https://i.ytimg.com/vi/mRRt_qIarBg/maxresdefault.jpg"
              className="d-block w-100"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;

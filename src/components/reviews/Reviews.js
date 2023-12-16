import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'; // Example solid icon
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewsData from './reviews.json'
import './reviews.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {
  const [iconSize, setIconSize] = useState(50); // Initial icon size

  const handleResize = () => {
    // Update icon size based on window width
    const newSize = window.innerWidth > 768 ? 2 : 1;
    setIconSize(newSize);
  };

  useEffect(() => {
    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className='reviews' id="reviews">
        <Swiper
        className="reviews-swiper"
        modules={[Pagination]}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={false}
        spaceBetween={15}
        pagination={false}
        breakpoints = {{
          200: {
            slidesPerView: 1.3,
          },
          650: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
           {reviewsData.map((item, index) => {
                return ( <SwiperSlide  key={index}>
                    <div className="review">
                      <div className='quote'><FontAwesomeIcon icon={faQuoteRight} size={`${iconSize}x`} /></div>
                      <div className='content'><p>{item.content}</p>
                      <span className='reviewer-name'>{item.reviewer}</span>
                      </div>
                    </div>
                  </SwiperSlide>)
            })}
      </Swiper>
      </div>
    );
};

export default Reviews;

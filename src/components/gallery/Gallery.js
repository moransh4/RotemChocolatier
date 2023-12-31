import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './gallery.json'
import './gallery.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = (props) => {
  console.log(props.id);

    return (
        <div className='workshops' id="gallery">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints = {{
          200: {
            slidesPerView: 1.3,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="workshops-swiper"
      >
           {data[props.id]?.map((item, index) => {
               const imageName =   item.imageName + '.jpg';
               const imageUrl = `${process.env.PUBLIC_URL}/images/${imageName}`;
               const divStyle = {backgroundImage:  `url(${imageUrl})`};
               console.log(imageUrl);
                return ( <SwiperSlide  key={index}>
                    <div className="photo" style={divStyle}></div>
                  </SwiperSlide>)
            })}
      </Swiper>
      </div>
    );
};

export default Gallery;

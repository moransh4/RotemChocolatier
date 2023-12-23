import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer.js';
import Gallery from '../components/gallery/Gallery.js';
import Reviews from '../components/reviews/Reviews.js';

const Workshops = () => {
    const { workshopID } = useParams();

return (<div className="page">
        <Gallery/>
        <Reviews/>
        <Footer/>
    </div>)
  }
  
  
export default Workshops;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer.js';
import Workshop from '../components/workshop/Workshop.js'
import Gallery from '../components/gallery/Gallery.js';

const Workshops = () => {
    const { workshopID } = useParams();

  useEffect(() => {
    window.scrollTo(0,0)
    return () => {
    };
  }, []); 

return (<div className="page">
        <Workshop id={workshopID}/>
        <Gallery id={workshopID}/>
        <Footer/>
    </div>)
  }
  
  
export default Workshops;
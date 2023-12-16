import React from 'react';
import Header from "../components/header/Header.js";
import Cards from '../components/card/Cards.js';
import Footer from '../components/footer/Footer.js';
import Intro from '../components/Intro/Intro.js';
import Gallery from '../components/gallery/Gallery.js';
import Reviews from '../components/reviews/Reviews.js';

const Home = () => {

return (<div className="page">
        <Header/>
        <Intro/>
        <Cards/>
        <Gallery/>
        <Reviews/>
        <Footer/>
    </div>)
  }
  
  
export default Home;
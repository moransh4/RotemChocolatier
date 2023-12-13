import React from 'react';
import Header from "../components/header/Header.js";
import Cards from '../components/card/Cards.js';
import Footer from '../components/footer/Footer.js';
import Intro from '../components/Intro/Intro.js';
const Home = () => {

return (<div className="page">
        <Header/>
        <Intro/>
        <Cards/>
        <Footer/>

    </div>)
  }
  
  
export default Home;
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './pages/Home.js';
import Workshops from './pages/Workshops.js';
import './app.scss'; 

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/workshop/:workshopID" element={<Workshops/>} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </BrowserRouter>

  )
}


export default App;

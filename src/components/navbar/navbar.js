import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import logo from './images/my-logo.jpg';
// import SubMenu from './SubMenu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [openMenueID , setOpenMenueID] = useState(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeSubMenu  = () => {
    // setOpenMenueID(null);
    handleShowNavbar();
  };

  // const OpenSubMenueHandler = (name) => {
  //   if(openMenueID === name){
  //     setOpenMenueID(null);
  //   }
  //   else{
  //     setOpenMenueID(name);
  //   }
  // };

  let delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
  })();

  const  scrollToSection = async (sectionId) => {
    // setOpenMenueID(null);
    handleShowNavbar();
    const element = document.getElementById(sectionId);

    if (element) {
      setShowNavbar(false);
      const newPosition = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: newPosition, behavior: 'smooth' });
      // element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'  });
    }
    else{

      delay(function(){
        const element = document.getElementById(sectionId);
        const newPosition = element?.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: newPosition, behavior: 'smooth' });
    }, 500 );


    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to='/' className="logo" onClick={() => scrollToSection('header')}>
          <img src={logo} alt=''/>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar ? "active" : ''}`}>
          <ul>
            <li>
              <NavLink to='/' onClick={() => scrollToSection('header')}>בית</NavLink>
            </li>
            <li>
              <NavLink to='/#about' onClick={() => scrollToSection('about')}>אודות</NavLink>
            </li>
            <li>
              <NavLink to='/#workshops' onClick={() => scrollToSection('workshops')}>סדנאות</NavLink>
              {/* <NavLink to='/#workshops' onClick={() => OpenSubMenueHandler('workshops') }>סדנאות</NavLink>
              <SubMenu isActive={openMenueID === 'workshops'} onClick={closeSubMenu} name={"workshops"}/> */}
            </li>
            <li>
              <NavLink to='/workshop/pralines' onClick={() => closeSubMenu()}>פרלינים</NavLink>
            </li>
            <li>
              <NavLink to='/#gallery' onClick={() => scrollToSection('gallery')}>גלריה</NavLink>
            </li>
            <li>
            <NavLink to='/#reviews' onClick={() => scrollToSection('reviews')}>המלצות</NavLink>
            </li>
            <li>
              <NavLink to='/#contact' onClick={() => scrollToSection('contact')}>צור קשר</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);



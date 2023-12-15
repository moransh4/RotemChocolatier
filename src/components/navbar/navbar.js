import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import logo from './images/my-logo.jpg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const scrollToSection = (event) => {
    event.preventDefault(); // Prevents the default behavior of the link
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt=''/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
            <a href="#header" onClick={scrollToSection}>בית</a>

              {/* <NavLink onClick={() => scrollToSection('header')}>בית</NavLink> */}
            </li>
            <li>
            <a href="#workshops" onClick={scrollToSection}>סדנאות</a>
              {/* <NavLink onClick={() => scrollToSection('workshops')}>סדנאות</NavLink> */}
            </li>
            <li>
            <a href="#about" onClick={scrollToSection}>אודות</a>
              {/* <NavLink onClick={() => scrollToSection('about')}>אודות</NavLink> */}
            </li>
            <li>
            <a href="#contact" onClick={scrollToSection}>צור קשר</a>
              {/* <NavLink onClick={() => scrollToSection('contact')}>צור קשר</NavLink> */}
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



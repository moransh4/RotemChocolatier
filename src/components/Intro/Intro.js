// Intro.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './intro.scss';

// Import your image (replace 'your-image.jpg' with the actual file name)
import chocolatierImage from './images/intro.jpg';

const Intro = () => {
    return (
      <div className="intro-container">
        <div className="intro-image-container">
          <img src={chocolatierImage} alt="Chocolatier" className="intro-image" />
        </div>
  
        <div className="intro-text-container">
          <h1 className="intro-heading">שלום! אני [שמך], מאמן השוקולד</h1>
          <p className="intro-text">
            ברוכים הבאים למציאות הקסומה שלי, היכולת ליצור מתוקים מושלמים מקקאו טבעי. אני מתמחה ביצירת
            שוקולדים בעבודת יד, מבחר טעמים ייחודיים ועיצובים יצירתיים.
          </p>
          <div className="intro-skills">
            <p>כמה מתכונים לקסם שוקולדי שלי:</p>
            <ul>
              <li>שוקולד חמאת ברנדי לנשיאים</li>
              <li>טראפלס בכמה גוונים וטעמים</li>
              <li>פרלינים ממגוון קקאו ואגוזים</li>
              <li>בומבונייר לחובבי קפה</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Intro;

// Intro.js
import React from 'react';
import './intro.scss';
import chocolatierImage from './images/rotem.jpg';

const Intro = () => {
    return (
      <section className="about" id='about'>
        <div className="content-wrapper">
          <div className="img-wrapper">
            <img className="img" src={chocolatierImage} alt=""/>
          </div>
          <div className="text-wrapper">
            {/* <h1 className="title">TITLE</h1> */}
            <p className='text'>מאז שאני זוכרת את עצמי שוקולד היה אהבתי הגדולה.<br/>
                עם השנים, האהבה שלי לשוקולד רק התעצמה והחלטתי להפוך אותה למקצוע.</p>
            <p className='text'>חוויה כיפיית ומהנה שכל כולה עוסקת בשוקולד איכותי.</p>
            <p className='text'>זה הזמן שלכם להתנתק לרגע מהיום יום ולהיכנס לעולם השוקולד שלי.</p>
          </div>
       </div>
    </section>
    )
  }
  
  export default Intro;

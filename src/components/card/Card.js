import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = (props) => {

    const imageName =   props.details.imageName + '.jpg';
    const imageUrl = `${process.env.PUBLIC_URL}/images/${imageName}`;


    const divStyle = {
        backgroundImage:  `url(${imageUrl})`
      };

    return (
        <div className={`blog-card ${props.details.isAlt ? 'alt'  : ''}`}>
        <div className="meta">
          <div className="photo" style={divStyle}></div>
        </div>
        <div className="description">
          <h1>{props.details.title}</h1>
          {/* <h2>Opening a door to the future</h2> */}
            {props.details.content?.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
            {/* <Link to={props.details.moreInfoLink}>לפרטים נוספים לחץ כאן</Link>      */}
        </div>
      </div>
    );
};

export default Card;





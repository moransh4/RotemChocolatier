import React from 'react';
import './card.scss';

const Card = (props) => {

    const imageNme =   props.details.imageNme + '.jpg';

    const divStyle = {
        backgroundImage:  `url(./images/${imageNme})`
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
        </div>
      </div>
    );
};

export default Card;





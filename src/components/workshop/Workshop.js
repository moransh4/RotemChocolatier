import React from 'react';
import workshop from './workshops.json';
import './workshop.scss';

const Workshop = (props) => {
  console.log(workshop[props.id].imageName);

  const imageName =   workshop[props.id].imageName + '.jpg';
  const imageUrl = `${process.env.PUBLIC_URL}/images/${imageName}`;


  const divStyle = {
      backgroundImage:  `url(${imageUrl})`
    };

  return (
    <div className='workshop'>
      <div className="slanted-container">
        <div className="slanted-left">
        <div className="photo" style={divStyle}></div>
        </div>
        <div className="right-content">
          <h1>{workshop[props.id].title}</h1>
          {workshop[props.id].content?.map((item, index) => {
            return (<p key={index}>{item}</p>)
          })}
        </div>
      </div>
    </div>

  )
}

export default Workshop;

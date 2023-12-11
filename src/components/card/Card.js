import React from 'react';
import './card.scss';

const Card = (props) => {

    const imageNme =  props.details.imageNme + '.jpg';

    return (
        <div className='card'>
            <img src={`./images/${imageNme}`} alt=""/>
            <div class="card-body">
                <h5 class="card-title">
                    <a href="#">{props.details.title}</a>
                </h5>
                {props.details.content?.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>       
        </div>
    );
};

export default Card;





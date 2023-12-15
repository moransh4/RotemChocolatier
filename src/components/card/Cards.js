import React from 'react';
import data from '../../Data/workshops.json'
import Card from './Card';
import './card.scss';

const Cards = () => {

    return (
        <div className='cards' id='workshops'>
            {data.map((item, index) => {
                return <Card key={index} details={item}/>
            })}
                 
        </div>
    );
};

export default Cards;





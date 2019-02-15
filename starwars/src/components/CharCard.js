import React from 'react';
import './StarWars.css';

const CharCard = props => {
    return (
        <div className="each-character">
            <h2>{props.chars.name}</h2>
        </div>
    );
}

export default CharCard;
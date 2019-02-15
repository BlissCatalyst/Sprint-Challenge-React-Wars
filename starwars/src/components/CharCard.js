import React from 'react';
import './StarWars.css';

const CharCard = props => {
    return (
        <div className="each-character">
            <h2>{props.chars.name}</h2>
            <ul>
                <li><strong>Born: </strong>{props.chars.birth_year}</li>
                <li><strong>Height: </strong>{props.chars.height}</li>
                <li><strong>Skin Color: </strong>{props.chars.skin_color}</li>
                <li><strong>Gender: </strong>{props.chars.gender}</li>
            </ul>
        </div>
    );
};

export default CharCard;
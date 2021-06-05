import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';


const MovieCard = ({movie : {image, name, date, rating}}) => {
    return(
        <div className="cards">
             <div className="card">
            <div>
                <img src={image} alt="poster"/>
            </div>
            <div>
                <h1>{name}</h1>
                <div>
                    <h3>{date}</h3>
                </div>
                <div>
                    
                    <Rate rating={rating}/>
                </div>
             

            </div>
        </div>
        </div>
       
    )
};
export default MovieCard;
import React from "react";
import './Card.css';


function Card (props) {
    
    return(
        <div className= 'Card'>
            <div className='card-title'>
                <div className="card-title-avatar">
                    <img src="" alt="" />
                </div>
                <div className='card-title-guia'>
                    <p>{props.guiaName}</p>
                    <p>{props.place}</p>
                </div>

            </div>
            <div className= 'card-img'>
                <img src="" alt="" />
            </div>

            <div className='card-detail'>
                <div ClasName='card-detail-Puntation'>
                    <img src="" alt="" />
                    <p> Punctuation</p>
                </div>
                <div ClasName='card-detail-price'>
                    <img src="" alt="" />
                    <p>Price</p>
                </div>
                <div ClasName='card-detail-distance'>
                    <img src="" alt="" />
                    <p>Distance</p>
                </div>
                <div ClasName='card-detail-coments'>
                    <img src="" alt="" />
                    <p>Coments</p>
                </div>
                <div ClasName='card-detail-time'>
                    <img src="" alt="" />
                    <p>Time</p>
                </div>

            </div>

            
        
        </div>
    )


}

export default Card;
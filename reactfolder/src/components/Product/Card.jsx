import React from "react";

function Card (props) {
    
    return(
        <div className= 'Card'>
            <div className='card-title'>
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

            <div className= 'card-description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid quibusdam eos ad quae praesentium delectus aliquam nihil ipsam obcaecati tenetur, dicta repellat iusto est at veritatis odio. Molestiae, dolor?
                At praesentium perspiciatis et aperiam vitae, dolorem ratione nobis adipisci commodi consequuntur architecto, dolores doloribus culpa dignissimos ipsum amet reiciendis voluptates nesciunt temporibus quae ducimus rerum deserunt dolore eum? Quae.</p>
                <a href="#">Ver mas</a>

            </div>
        
        </div>
    )


}

export default Card;
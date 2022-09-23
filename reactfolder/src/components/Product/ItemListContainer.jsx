import React from "react";
import Card from './Card/Card';

function ItemListContainer(props){

    return(
        <div>
            <h1>{props.greeting}</h1>
            <div className="main container"> 
            
            <Card
            guiaName = "Peter D." 
            place= "Pasaje en las cuevas"
            />

<Card
            guiaName = "Sofia J." 
            place= "Caminos sinuosos"
            />
           
            </div>
        </div>
    )
}

export default ItemListContainer;

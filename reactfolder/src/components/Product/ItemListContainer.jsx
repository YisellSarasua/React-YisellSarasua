import React from "react";
import Card from './Card';

function ItemListContainer(props){

    return(
        <div>
            <h1>{props.greeting}</h1>
            <div className="main container"> 
            
            <Card
            guiaName = "Peter D." 
            place= "Pasaje en las cuevas"
            />
           
            </div>
        </div>
    )
}

export default ItemListContainer;

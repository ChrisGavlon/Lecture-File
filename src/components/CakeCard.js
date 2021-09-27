import { useState } from 'react'

function CakeCard({cake, setSelectedCake, selectedCake}){

    return(
        <div 
        onClick={() => { setSelectedCake(cake)}}
        style={selectedCake===cake?{border: '5px solid black'}: null}
        key={cake.flavor}
        >
            <h1>{cake.flavor}</h1> 
            <h3>${cake.price}</h3>
        </div>
    );
}

export default CakeCard;
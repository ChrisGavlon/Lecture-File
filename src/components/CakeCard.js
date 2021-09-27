import { useState } from 'react'

function CakeCard({cake, setSelectedCake}){
    const [selected, setSelected] = useState(null)

    function handleClick(){
        if(!selected){
            setSelected({border: '5px solid black'})
        } else {
            setSelected(null)
        }
    }

    return(
        <div onClick={() => {
            setSelectedCake(cake)
            handleClick()
        }}
        
        style={selected}
        key={cake.flavor}>
            <h1>{cake.flavor}</h1> 
            <h3>${cake.price}</h3>
        </div>
    );
}

export default CakeCard;
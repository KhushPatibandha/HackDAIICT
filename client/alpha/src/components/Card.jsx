import { ClassNames } from '@emotion/react';
import React from 'react';


function Card() {

    function handleClick(){
        console.log("hello")
    }
    return (
        <div className='card'>
            <h1>Amanda Waller</h1>
            <p>Stage 4 Limphomatic Cancer</p>
            <button onClick={()=>{
                handleClick()
            }}></button>
        </div>
    )
}


export default Card;
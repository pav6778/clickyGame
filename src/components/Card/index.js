import React from 'react'
import './style.css'

function Card(props){
    return(
        <div onClick={() => props.clickHandle(props.id)} className="images"role="img" style={{backgroundImage: 'url('+props.image +')'}}>

        </div>
    )
}
export default Card;
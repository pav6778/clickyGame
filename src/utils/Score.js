import React from 'react'

function Score(props) {
    return(
        <div className="float-left ">
           <h4> Score <span>{props.score}</span></h4>
        </div>
    ) 
}
export default Score;
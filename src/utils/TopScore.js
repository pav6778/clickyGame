import React from 'react'

function TopScore(props){
        return(
            <div className="float-right pl-1">
            <h4>  | Top Score <span>{props.topScore}</span></h4>
            </div>
        )

}
export default TopScore;
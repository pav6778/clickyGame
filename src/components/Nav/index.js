import React from 'react'
import Message from '../../utils/Message'
import Score from '../../utils/Score'
import TopScore from '../../utils/TopScore'
import './style.css'

function Nav(props){
    return (
<div>
    <nav className="navbar fixed-top navbar-warning bg-warning">
        <a className="navbar-brand text-dark" href="/"><h1>Clicky Game</h1></a>

    <Message 
     text={props.text}
    />
<div>
    <Score 
    score={props.score}
    />
    <TopScore 
     topScore={props.topScore}
    />
</div>
  
    </nav>
</div>
    )
}

export default Nav;
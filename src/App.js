import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';
import TekkenChars from './tekkenchars.json';
import Wrapper from './components/Wrapper'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Chars : TekkenChars,
      message: {
        text: "Click to start the game",
        score: 0,
        topScore: 0
      }
    }
  }

clickHandle = id => {


  console.log(TekkenChars)

};




render(){
  
  return (

    <div className="App">
     <Nav
     text={this.state.message.text}
     score={this.state.message.score}
     topScore={this.state.message.topScore}
     />
     <Header />
     <Wrapper>
     {shuffleArray(this.state.Chars).map(chars =>(

     <Card 
     clickHandle={this.clickHandle}
     id={chars.id}
     key={chars.id}
     image={chars.image}
     />
     ))}
      </Wrapper>
    </div>
  );
}
}


export default App;

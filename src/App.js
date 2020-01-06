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
      clicked : [],
      message: {
        text: "Click to start the game",
        score: 0,
        topScore: 0
      }
    }
  }

clickHandle = id => {

  //capturing the images already clicked 
  const  x = this.state.clicked.concat(id);
  
  this.setState({message: {text: "", score: this.state.message.score + 1, topScore: this.state.message.topScore + 1}})

  
  console.log(this.state.clicked)
  for(let i = 0; i < this.state.clicked.length; i++){
    
  if(this.state.clicked[i] === id){

    this.setState({
      clicked : [],
      message: {
        text: "Sorry, you lost! Try again?",
        score: 0,
        topScore: 0
      }
    })
  }
  
  }
  setTimeout(() => {
    
    this.setState({clicked: x})
  }, 100);


    


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

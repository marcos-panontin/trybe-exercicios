import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
  clickBtnOne: 0,
  clickBtnTwo: 0,
  clickBtnThree: 0,
  }
  
  getButtonColor = (num) => num >= 2 && num % 2 === 0 ? 'green' : 'white';

  handleButtonOne = () => {
    this.setState((prevState) => ({
      clickBtnOne: prevState.clickBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clickBtnOne)}`);
    });
}

  handleButtonTwo = () => {
    this.setState((prevState) => ({
    clickBtnTwo: prevState.clickBtnTwo + 1,
  }))
}

  handleButtonThree = () => {
    this.setState((prevState) => ({
    clickBtnThree: prevState.clickBtnThree + 1,
  }))
}



  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
  return (
    <>
      <button
        onClick={this.handleButtonOne}
        style={{ backgroundColor: this.getButtonColor(this.state.clickBtnOne) }}>
        Cliques: {this.state.clickBtnOne}
      </button>

      <button
        onClick={this.handleButtonTwo}
        style={{ backgroundColor: this.getButtonColor(this.state.clickBtnTwo) }}>
        Cliques: {this.state.clickBtnTwo}
      </button>

      <button
        onClick={this.handleButtonThree}
        style={{ backgroundColor: this.getButtonColor(this.state.clickBtnThree) }}>
        Cliques: {this.state.clickBtnThree}
      </button>
    
    </>
  )
  
  }
}

export default App;
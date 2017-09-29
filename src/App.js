import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = (incrementValue) => {
    this.setState( prevState => ({
      counter: prevState.counter + incrementValue
    }) );
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <Button
          incrementValue={1}
          onClickHandler={this.incrementCounter}
         />
         <Button
          incrementValue={10}
          onClickHandler={this.incrementCounter}
         />
         <Button
          incrementValue={100}
          onClickHandler={this.incrementCounter}
         />
        <Result
          counter={counter}
         /> 
      </div>
    );
  }
}

const Button = (props) =>
  <button
    onClick={ () =>  props.onClickHandler(props.incrementValue) }
  >
    +{props.incrementValue}
  </button>

const Result = (props) => 
  <div>
    {props.counter}
  </div>  

export default App;

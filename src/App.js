import React, { Component } from 'react';

const data = [
  {avatar_url: "https://avatars2.githubusercontent.com/u/22999983?v=4",
  name: "Szymon",
  location: "Warsaw"},
  {avatar_url: "https://avatars2.githubusercontent.com/u/22999984?v=4",
  name: "Kazik",
  location: "Lublin"},
];

const url = `https://api.github.com/users/jakeirs`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      inputValue: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.inputValue}`)
      .then( response => response.json() )
      .then( response => this.addNewCard(response) )
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  addNewCard = (cardInfo) => {
    this.setState( prevState => ({cards: prevState.cards.concat(cardInfo)}) )
  }

  render() {
    const { cards, inputValue } = this.state;
    return (
      <div className="App">
        <Form
          inputValue={inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CardList cards={cards} />
      </div>
    );
  }
}

const Card = (props) => {
  const {name, location, avatar_url} = props
  return (
    <div>
      <img width="95" src={avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{name}</div>
        <div>{location}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {  
  return (
    <div>
      {
        props.cards.map(user => (
          <Card key={user.id} {...user} />          
        ))
      }
    </div>
  )
};

const Form = (props) => {
  const {inputValue, handleChange, handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange} 
        value={inputValue}
      />
      <button type="submit">Submit</button>
    </form>
  )
}


export default App;

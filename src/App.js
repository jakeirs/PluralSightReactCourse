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
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      inputValue: '',
    }
  }

  fetchNewCard = (event, user) => {
    event.preventDefault();
    const url = `https://api.github.com/users/${user}`;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => this.addNewCard(resp));
  }

  addNewCard = (newCard) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(newCard)
    }));
  }

  handleChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    this.setState(prevState => ({
      inputValue
    }));
  }

  render () {
    const { cards, inputValue } = this.state;
    return (
      <div>
        <Form 
          value={inputValue}
          onChangeFunction={this.handleChange}
          onSubmitFunction={this.fetchNewCard} 
        />
        <CardList cards={cards} />
      </div>
    )
  }
}

const Card = (props) => {
  return (
    <div>
      <img width="100" src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 20, marginBottom: 20 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
        <div >{props.location}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {
        props.cards.map( card => (
          <Card key={card.id} {...card}/>
        ))
      }
    </div>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={(event) => props.onSubmitFunction(event, props.value)} >
      <input onChange={props.onChangeFunction} value={props.value} />
      <button type="submit">Submit</button>
    </form>
  )
}



export default App;

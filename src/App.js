import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  // Card & CardList

  render() {
    const {  } = this.state;
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

const data = [
  {avatar_url: "https://avatars2.githubusercontent.com/u/22999983?v=4",
  name: "Szymon",
  location: "Warsaw"},
  {avatar_url: "https://avatars2.githubusercontent.com/u/22999984?v=4",
  name: "Kazik",
  location: "Lublin"},
]

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
        data.map(user => (
          <Card
            {
            ...user
            }
          />
        ))
      }
    </div>
  )
}



export default App;

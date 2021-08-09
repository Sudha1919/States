import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 10,
      name: 'omkar',
      friends: ['munni', 'venkat']
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
        <p>{this.state.name}</p>
        <ul>
          <li>{this.state.friends[0]}</li>
          <li>{this.state.friends[1]}</li>
          <li>{this.state.friends[2]}</li>
        </ul>
        <ul>
          {this.state.friends.map(function(data, i) {
            return <li>{data}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default App;

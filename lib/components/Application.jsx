import React, { Component } from 'react';

class Application extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: null,
      userName: '',
      itemsDatabase: null,
    };
  }

  render() {

    return (
      <div>
        <h1 id="top-of-page">Flash Shopper</h1>
        <p>Hello world</p>
      </div>
    );
  }

}

export default Application;

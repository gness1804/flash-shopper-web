import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  addNewItem(name, aisle, note, quantity, id){
    console.log(name);
  }

  render() {
    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        <Input addNewItem={this.addNewItem} />
        <Output />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}


export default Application;

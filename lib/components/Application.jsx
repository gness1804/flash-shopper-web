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

  componentDidMount(){
    //render ideas to page; pass the info into Output
  }

  addNewItem(newItem) {
    this.state.items.push(newItem);
    
  }

  render() {

    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        <Input addNewItem={this.addNewItem.bind(this)} />
        <Output />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}


export default Application;

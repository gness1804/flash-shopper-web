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
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      this.setState({ items });
    } else {
    this.setState({ items: [] });}
  }

  deleteItem(id) {
    console.log(id);
  }

  addNewItem(newItem) {
    this.state.items.push(newItem);
    const { items } = this.state;
    this.setState({ items }, () => this.store());
  }

  store() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  render() {

    const { items } = this.state;

    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        <Input addNewItem={this.addNewItem.bind(this)} />
        <Output items={items} deleteItem={() => { this.deleteItem }}/>
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}


export default Application;

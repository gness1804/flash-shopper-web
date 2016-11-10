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

  deleteItem = (id) => {
    const warning = confirm('Are you sure you want to delete this item?');
    if (warning) {
      const newArr = this.state.items.filter((item) => { return item.id !== id });
      this.setState({ items: newArr }, () => { this.store(); });
    }
  }

  addNewItem(newItem) {
    this.state.items.push(newItem);
    const { items } = this.state;
    this.setState({ items }, () => this.store());
  }

  deleteAllItems = () => {
    const warning = confirm("Warning! You are about to delete ALL your items! This cannot be undone!");
    if (warning) {
      this.setState({ items: [] }, () => this.store());
    }
  }

  store() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  sortItems = () => {
    const newArr = this.state.items.sort((a, b) => { return a.aisle - b.aisle });
    this.setState({ items: newArr }, () => this.store());
  }

  render() {

    const { items } = this.state;

    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        <Input addNewItem={this.addNewItem.bind(this)} deleteAllItems={this.deleteAllItems} sortItems={this.sortItems} />
        <Output items={items} deleteItem={this.deleteItem} />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}

export default Application;

import React, { Component } from 'react';
import Datalist from './Datalist';
import Category from './Category';

const ReactDOM = require('react-dom');

class Input extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      aisle: '',
      note: '',
      quantity: null,
      id: null,
    };
  }

  createNewItem() {

  }

  updateQuantity(e){
    this.setState({ quantity: e.target.value });
  }

  updateName(e) {
    this.setState({ name: e.target.value });
  }

  updateNote(e) {
    this.setState({ note: e.target.value });
  }

  updateAisle(e) {
    this.setState({ aisle: e.target.value });
  }

  render() {


    return (
      <div id="input-items-container">
        <input id="item-input" type="text" placeholder="Item Name" list="groceries" onChange={(e) => { this.updateName(e); }} />
        <Datalist />
        <Category />
        <input id="aisle-input" type="text" placeholder="Aisle" onChange={(e) => { this.updateAisle(e); }} />
        <input id="note" type="text" placeholder="Note" onChange={(e) => { this.updateNote(e) }} />
        <input id="quantity" type="text" placeholder="Quantity (incl. unit)" onChange={(e) => { this.updateQuantity(e) }} />
        <button id="submit-button" type="button" onClick={() => { this.createNewItem(); }}>Submit</button>
        <button id="sort-items-button" type="button">Sort Items</button>
        <button id="delete-all-items-button" type="button" >Delete ALL Items!</button>
        </div>
    );
  }

}


export default Input;

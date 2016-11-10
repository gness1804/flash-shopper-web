import React, { Component } from 'react';
import Datalist from './Datalist';
import Category from './Category';

const ReactDOM = require('react-dom');

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      aisle: '',
      note: '',
      quantity: null,
      id: null,
    };
  }

  createNewItem(name, aisle, note, quantity) {
    const newItem = {
      name,
      aisle,
      note,
      quantity,
      id: Date.now(),
    };
    this.props.addNewItem(newItem);
    this.setState({ name: '' });
    this.setState({ aisle: '' });
    this.setState({ note: '' });
    this.setState({ quantity: null });
    this.setState({ id: null });
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

    const { name, aisle, note, quantity, id } = this.state;

    return (
      <div id="input-items-container">
        <input id="item-input" value={this.state.name} type="text" placeholder="Item Name" list="groceries" onChange={(e) => { this.updateName(e); }} />
        <Datalist />
        <Category />
        <input id="aisle-input" value={this.state.aisle} type="text" placeholder="Aisle" onChange={(e) => { this.updateAisle(e); }} />
        <input id="note" value={this.state.note} type="text" placeholder="Note" onChange={(e) => { this.updateNote(e) }} />
        <input id="quantity" value={this.state.quantity} type="text" placeholder="Quantity (incl. unit)" onChange={(e) => { this.updateQuantity(e) }} />
        <button id="submit-button" type="button" onClick={() => { this.createNewItem(name, aisle, note, quantity, id); }}>Submit</button>
        <button id="sort-items-button" type="button">Sort Items</button>
        <button id="delete-all-items-button" type="button" >Delete ALL Items!</button>
        </div>
    );
  }

}


export default Input;

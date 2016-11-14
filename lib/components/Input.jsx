import React, { Component } from 'react';
import Datalist from './Datalist';
import Category from './Category';
import aisles from './Aisles';

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
      submitDisabled: true,
    };
  }

  assignAisle = (category) => {
    if (category === 'Produce' || category === 'Meat' || category === 'Deli/Prepared Foods' || category === 'Checkout' || category === 'Bakery' || category === 'Pest Control(Front of Store)'){
        this.setState({ note: category});
    } else {
        this.setState({ aisle: aisles[category] });
    }
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
    this.setState({ submitDisabled: true });
  }

  deleteAllItems(){
    this.props.deleteAllItems();
  }

  sortItems(){
    this.props.sortItems();
  }

  sortAlpha(){
    this.props.sortAlpha();
  }

  updateQuantity(e){
    this.setState({ quantity: e.target.value });
  }

  updateName(e) {
    this.setState({ name: e.target.value });
    if (e.target.value.length > 0) {
      this.setState({ submitDisabled: false });
    }
  }

  updateNote(e) {
    this.setState({ note: e.target.value });
  }

  updateAisle(e) {
    this.setState({ aisle: e.target.value });
  }

  validateNameField(e){
    if (e.target.value.length <= 0) {
      this.setState({ submitDisabled: true });
    }
  }

  render() {

    const { name, aisle, note, quantity, id, submitDisabled } = this.state;

    return (
      <div id="input-items-container">
        <input id="item-input" value={this.state.name} type="text" placeholder="Item Name" list="groceries" onChange={(e) => { this.updateName(e); }} onBlur={(e) => { this.validateNameField(e) }} />
        <Datalist />
        <Category assignAisle={this.assignAisle} />
        <input id="aisle-input" value={this.state.aisle} type="number" placeholder="Aisle" onChange={(e) => { this.updateAisle(e); }} />
        <input id="note" value={this.state.note} type="text" placeholder="Note" onChange={(e) => { this.updateNote(e) }} />
        <input id="quantity" value={this.state.quantity} type="text" placeholder="Quantity (incl. unit)" onChange={(e) => { this.updateQuantity(e) }} />
        <button id="submit-button" type="button" onClick={() => { this.createNewItem(name, aisle, note, quantity, id); }} disabled={submitDisabled}>Submit</button>
        <button id="sort-items-button" type="button" onClick={() => { this.sortItems(); }}>Sort by Aisle</button>
        <button id="sort-alpha-button" type="button" onClick={() =>{  this.sortAlpha(); }}>Sort Alpha</button>
        <button id="delete-all-items-button" type="button" onClick={() => { this.deleteAllItems(); }}>Delete ALL Items!</button>
        </div>
    );
  }

}

export default Input;

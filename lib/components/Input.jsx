import React, { Component } from 'react';
import Datalist from './Datalist';
import Category from './Category';

const ReactDOM = require('react-dom');

class Input extends Component {

  render() {
    return (
      <div id="input-items-container">
        <input id="item-input" type="text" placeholder="Item" list="groceries" />
        <Datalist />
        <Category />
        <input id="aisle-input" type="text" placeholder="Aisle" />
        <input id="note" type="text" placeholder="Note" />
        <input id="quantity" type="text" placeholder="Quantity (incl. unit)" />
        <button id="submit-button" type="button">Submit</button>
        <button id="sort-items-button" type="button">Sort Items</button>
        <button id="delete-all-items-button" type="button" >Delete ALL Items!</button>
        </div>
    );
  }

}


export default Input;

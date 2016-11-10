import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class ItemCard extends Component {

  render() {

    const { name, aisle, quantity, note, id } = this.props;

    return (
      <div id={id} className="each-idea-container">
        <h2 contentEditable="false" className="editable-item">Item: {name}</h2>
        <h3 contentEditable="false" className="editable-aisle">Aisle: {aisle}</h3>
        <h4 contentEditable="true" className="note">Your Note: {note}</h4>
        <h5 contentEditable="true" className="quantity">Quantity: {quantity}</h5>
        <button className="delete-button">Delete Item</button>
      </div>
    );
  }

}


export default ItemCard;

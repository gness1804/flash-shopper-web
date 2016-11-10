import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class ItemCard extends Component {

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  render() {

    const { name, aisle, quantity, note, id } = this.props;

    return (
      <div id={id} className="each-idea-container">
        <h2 onChange={(e) => { this.editName(e) }} className="editable-item" onClick={(e) => { this.makeNameEditable(e); }}>Item: {name}</h2>
        <h3 className="editable-aisle">Aisle: {aisle}</h3>
        <h4 className="note">Your Note: {note}</h4>
        <h5 className="quantity">Quantity: {quantity}</h5>
        <button className="delete-button" onClick={() => { this.deleteItem(id); }}>Delete Item</button>
      </div>
    );
  }

}


export default ItemCard;

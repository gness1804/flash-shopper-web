import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  makeEditable() {
    this.setState({ editable: true });
  }

  saveEdits() {
    this.setState({ editable: false });
  }

  render() {

    const { name, aisle, quantity, note, id } = this.props;
    const { editable } = this.state;

    let display;

    if (editable) {
      display = <div>
        <input defaultValue={name} />
        <input />
        <input />
        <input />
        <button onClick={() => { this.saveEdits() }}>Save Edits</button>
        <button className="delete-button" onClick={() => { this.deleteItem(id); }}>Delete Item</button>
      </div>
    } else {
      display = <div>
        <h2 className="editable-item">Item: {name}</h2>
        <h3 className="editable-aisle">Aisle: {aisle}</h3>
        <h4 className="note">Your Note: {note}</h4>
        <h5 className="quantity">Quantity: {quantity}</h5>
        <button onClick={() => { this.makeEditable(); }}>Edit Item</button>
        <button className="delete-button" onClick={() => { this.deleteItem(id); }}>Delete Item</button>
      </div>
    }

    return (
      <div id={id} className="each-idea-container">
        { display }
      </div>
    );
  }

}


export default ItemCard;

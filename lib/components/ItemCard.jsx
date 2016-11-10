import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      nameEditable: false,
    };
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  makeNameEditable(e){
    this.setState({ nameEditable: true });
  }

  editName(e) {
    
  }

  render() {

    const { name, aisle, quantity, note, id } = this.props;
    const { nameEditable } = this.state;

    return (
      <div id={id} className="each-idea-container">
        <h2 contentEditable={ nameEditable } onChange={(e) => { this.editName(e) }} className="editable-item" onClick={(e) => { this.makeNameEditable(e); }}>Item: {name}</h2>
        <h3 contentEditable="false" className="editable-aisle">Aisle: {aisle}</h3>
        <h4 contentEditable="true" className="note">Your Note: {note}</h4>
        <h5 contentEditable="true" className="quantity">Quantity: {quantity}</h5>
        <button className="delete-button" onClick={() => { this.deleteItem(id); }}>Delete Item</button>
      </div>
    );
  }

}


export default ItemCard;

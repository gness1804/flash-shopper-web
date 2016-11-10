import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Output extends Component {

  deleteItem(){
    console.log("test");
  }

  renderItems(item) {
    return(
      <div id={item.id} className="each-idea-container">
        <h2 contentEditable="false" className="editable-item">Item: {item.name}</h2>
        <h3 contentEditable="false" className="editable-aisle">Aisle: {item.aisle}</h3>
        <h4 contentEditable="true" className="note">Your Note: {item.note}</h4>
        <h5 contentEditable="true" className="quantity">Quantity: {item.quantity}</h5>
        <button className="delete-button">Delete Item</button>
      </div>
    );
  }

  render() {

    const { items } = this.props;

    return (
      <div>
        <article id="item-status-message">

        </article>
        <section id="items-master-container">
          <ul>
            <li>{items.map(this.renderItems)}</li>
          </ul>
        </section>
      </div>
    );
  }

}


export default Output;

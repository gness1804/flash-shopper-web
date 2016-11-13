import React, {Component} from 'react';
import ItemCard from './ItemCard';
const ReactDOM = require('react-dom');

class Output extends Component {

  render() {

    let itemList;
    const { items } = this.props;
    console.log(this.props);
    if (items) {
      itemList = items.map( item =>
        <ItemCard
          {...item}
          deleteItem={this.props.deleteItem}
        />
      );
    }

    return (
      <div>
        <article id="item-status-message">
          {this.props.items.length > 0 ? <p>Item(s) remaining: {this.props.items.length}</p> : <p>There are no items on your list!</p>}
        </article>
        <section id="items-master-container">
          {itemList}
        </section>
      </div>
    );
  }

}


export default Output;

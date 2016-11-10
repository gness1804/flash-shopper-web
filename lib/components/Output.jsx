import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Output extends Component {

  renderItems(item){
    console.log(item);
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

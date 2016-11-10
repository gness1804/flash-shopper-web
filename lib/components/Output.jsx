import React, {Component} from 'react';
import ItemCard from './ItemCard';
const ReactDOM = require('react-dom');

class Output extends Component {

  // deleteItem(id) {
  //   this.props.remove(id);
  // }

  render() {

    // console.log(this.props);

    let itemList;
    const { items } = this.props;
    if (items) {
      itemList = items.map( item =>
        <ItemCard
          {...item}
          deleteItem={ this.props.deleteItem }
        />
      );
    }

  //   if (contactArray) {
  //    contactList = contactArray.map(c =>
  //      <ContactCard
  //        {...c}
  //        user={this.props.user}
  //        imgStorage={this.props.imgStorage}
  //        contactImgID={c.contactID}
  //        contactTextID={c.key}
  //        key={c.key}
  //        submitEdit = {this.props.submitEdit}
  //        toggleFollowup={this.props.toggleFollowup}
  //        deleteContact = {this.props.deleteContact}
  //      />
  //    );
  //  }

    return (
      <div>
        <article id="item-status-message">

        </article>
        <section id="items-master-container">
          {itemList}
        </section>
      </div>
    );
  }

}


export default Output;

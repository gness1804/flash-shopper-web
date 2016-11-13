import React, { Component } from 'react';
import firebase, { signIn, signOut } from '../firebase';
import Input from './Input';
import Output from './Output';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: null,
      itemsDatabase: null,
    };
  }

  componentDidMount(){
    //const items = JSON.parse(localStorage.getItem('items'));
        //console.log(this.state.itemsDatabase);
   firebase.auth().onAuthStateChanged(user => this.assignDatabase(user));
    
    //if (items) {
    //  this.setState({ items });
    //} else {
    //this.setState({ items: [] });}
  }

  assignDatabase = (user) => {
  this.setState({
    user,
    itemsDatabase: user ? firebase.database().ref(user.displayName) : null,
  });
        
  }      

  deleteItem = (id) => {
    const warning = confirm('Are you sure you want to delete this item?');
    if (warning) {
      const newArr = this.state.items.filter((item) => { return item.id !== id });
      this.setState({ items: newArr }, () => { this.store(); });
    }
  }

  addNewItem(newItem) {
    //this.state.items.push(newItem);
    //const { items } = this.state;
    //this.setState({ items }, () => this.store());
    this.state.itemsDatabase.push(newItem);
  }

  deleteAllItems = () => {
    const warning = confirm("Warning! You are about to delete ALL your items! This cannot be undone!");
    if (warning) {
      this.setState({ items: [] }, () => this.store());
    }
  }

  onAuthStateChanged(user){
       console.log(user);
 }

  store() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  sortItems = () => {
    const newArr = this.state.items.sort((a, b) => { return a.aisle - b.aisle });
    this.setState({ items: newArr }, () => this.store());
  }

  warnAndSignOut(){
    const warning = confirm('Are you sure you want to sign out?');
    if (warning) {
      signOut();     
    }
  }

  render() {

    const { items, user } = this.state;

    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        { user ? <button className="sign-out-button" onClick={() => this.warnAndSignOut()}>Sign Out</button> : <button className="sign-in-button" onClick={() => signIn()}>Sign In</button>}
        <Input addNewItem={this.addNewItem.bind(this)} deleteAllItems={this.deleteAllItems} sortItems={this.sortItems} />
        <Output items={items} deleteItem={this.deleteItem} />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}

export default Application;

import React, { Component } from 'react';
import { map, extend } from 'lodash';
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
   firebase.auth().onAuthStateChanged(user => this.assignDatabase(user));
  }

  assignDatabase = (user) => {
  this.setState({
    user,
    itemsDatabase: user ? firebase.database().ref(user.displayName) : null,
  }, () => {
    this.listenToPutItemsOnPage(user);          
   });
        
  }      

 listenToPutItemsOnPage = (user) => {
   if (user) {
    firebase.database().ref(user.displayName).on('value', (snapshot) => {
     const items = this.returnArray(snapshot.val());
     this.setState({ items });
     });
  } else {
    this.setState({items: []});
  }   
 }

  deleteItem = (id) => {
    const user = this.state.user;
    const warning = confirm('Are you sure you want to delete this item?');
    if (warning) {
      const newArr = this.state.items.filter((item) => {return item.id !== id});
     const db = (firebase.database().ref(user.displayName));
     db.remove();
     for (var i = 0; i < newArr.length; i++){
  db.push(newArr[i]);   
     };
    //db.push(newArr);
    //this.setState({ items : newArr }); 
    }
  }

  returnArray(snapshots, key){
     let array = [];
    if (snapshots) {
      let fullArray = Object.keys(snapshots).map((each)=>{
        array.push(snapshots[each]);
      });
    }
    return array;  
  }

  addNewItem(newItem) {
    //this.state.items.push(newItem);
    //const { items } = this.state;
    //this.setState({ items }, () => this.store());
    this.state.itemsDatabase.push(newItem);
  }

  deleteAllItems = () => {
    const user = this.state.user;
    const warning = confirm("Warning! You are about to delete ALL your items! This cannot be undone!");
    if (warning) {
      const db = (firebase.database().ref(user.displayName));
     db.remove();
    }
  }

  onAuthStateChanged(user){
 }

//  store() {
//    localStorage.setItem('items', JSON.stringify(this.state.items));
//  }

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

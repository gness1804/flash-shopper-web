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
      userName: '',
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
       this.setState({ userName: user.displayName}); 
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

  sortItems = () => {
    const user = this.state.user;
    const newArr = this.state.items.sort((a, b) => { return a.aisle - b.aisle });
    const db = (firebase.database().ref(user.displayName));
     db.remove();
     for (var i = 0; i < newArr.length; i++){
  db.push(newArr[i]);   
     };
  }

  warnAndSignOut(){
    const warning = confirm('Are you sure you want to sign out?');
    if (warning) {
      signOut();     
    }
  }

  render() {
    const { items, user, userName } = this.state;

    return (
      <div>
        <h1 id="top-of-page">My Grocery List</h1>
        { user ? <button className="sign-out-button" onClick={() => this.warnAndSignOut()}>Sign Out</button> : <button className="sign-in-button" onClick={() => signIn()}>Sign In</button>}
        { userName ? <p>Logged in as: <span>{userName}</span></p> : <p>You are not logged in!</p> }
        <Input addNewItem={this.addNewItem.bind(this)} deleteAllItems={this.deleteAllItems} sortItems={this.sortItems} />
        <Output items={items} deleteItem={this.deleteItem} />
        <a href="#top-of-page"><button id="top-of-page-button" type="button">Top of Page</button></a>
      </div>
    );
  }

}

export default Application;

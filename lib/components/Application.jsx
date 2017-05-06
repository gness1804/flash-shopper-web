// @flow

import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseApp from '../../firebaseConfig';  // eslint-disable-line
import AuthScreen from './AuthScreen'
import cleanUpUserEmail from '../../helpers/cleanUpUserEmail'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      showAuthScreen: true,
      userEmail: '',
      userId: '',
    }
    this.itemsRef = {}
  }

  state: {
    items: Array<Object>,
    showAuthScreen: boolean,
    userEmail: string,
    userId: string,
  }

  componentDidMount = (): void => {
    this.initializeApp()
  }

  itemsRef: Object

  hideAuthScreen = ():void => {
    this.setState({ showAuthScreen: false })
  }

  initializeApp = ():void => {
    firebase.auth().onAuthStateChanged((user: Object) => {
      if (user) {
        const email = cleanUpUserEmail(user.email)
        this.setState({ userEmail: user.email })
        this.setState({ userId: user.uid })
        this.itemsRef = firebase.database().ref(email + '/main') //eslint-disable-line
        this.hideAuthScreen()
        this.listenForItems(this.itemsRef)
      }
    })
  }

  listenForItems = (itemsRef: Object):void => {
    itemsRef.on('value', (snapshot: Array<{ name: string, aisle: string, note: string, quantity: string, inCart: boolean, key: string, val: Function}>) => {
      const newArr = []
      snapshot.forEach((item: { name: string, aisle: string, note: string, quantity: string, inCart: boolean, key: string, val: Function}) => {
        newArr.push({
          name: item.val().name,
          aisle: item.val().aisle,
          quantity: item.val().quantity,
          note: item.val().note,
          inCart: item.val().inCart || false,
          id: item.key,
        })
      });
      this.setState({ items: newArr })
    });
  }

  render() {
    const { showAuthScreen, items } = this.state
    return (
      <div>
        <h1 id="top-of-page">Flash Shopper</h1>
        {showAuthScreen && <AuthScreen />}
      </div>
    );
  }

}

export default Application;

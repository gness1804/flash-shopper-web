// @flow

import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseApp from '../../firebaseConfig';  // eslint-disable-line
import AuthScreen from './AuthScreen'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      showAuthScreen: false,
    }
  }

  state: {
    showAuthScreen: boolean,
  }

  render() {

    return (
      <div>
        <h1 id="top-of-page">Flash Shopper</h1>
        <AuthScreen />
      </div>
    );
  }

}

export default Application;

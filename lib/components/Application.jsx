// @flow

import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseApp from '../../firebaseConfig';  // eslint-disable-line
import AuthScreen from './AuthScreen'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      showAuthScreen: true,
      userEmail: '',
      userId: '',
    }
  }

  state: {
    showAuthScreen: boolean,
    userEmail: string,
    userId: string,
  }

  render() {
    const { showAuthScreen } = this.state

    return (
      <div>
        <h1 id="top-of-page">Flash Shopper</h1>
        <AuthScreen
          visible={showAuthScreen}
        />
      </div>
    );
  }

}

export default Application;

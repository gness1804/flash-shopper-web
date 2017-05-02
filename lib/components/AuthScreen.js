// @flow

import React, { Component } from 'react';
import * as firebase from 'firebase';

class AuthScreen extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  state: {
    email: string,
    password: string,
  }

  logIn = (email: string, password: string):void => {
    if (!email || !password) {
      alert(
        'Oops! You must enter both an email and a password.',
      )
      return
    }
    const promise = new Promise((resolve) => {
      resolve(
        firebase.auth().signInWithEmailAndPassword(email, password),
      )
    })
    promise
    .then(() => { this.resetEmailAndPWStates() })
    .catch(() => { this.showLogInError() })
  }

  resetEmailAndPWStates = ():void => {
    this.setState({ email: '' })
    this.setState({ password: '' })
  }

  sendResetPasswordEmail = (email: string):void => {
    if (!email) {
      alert('You must enter an email address.')
      return
    }
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => { this.showRecoveryEmailAlert() })
    .catch(() => { this.showRecoveryError() })
  }

  showHelpDialog = ():void => {
    alert(
      'Welcome to Flash Shopper! To use the app, you must create an account by entering a valid email and a password into the input fields and then tapping the "Sign Up" button. Once signed up, you can log in by entering these credentials and then taping "Log In". If you forget your password, you can easily recover it by entering in your email and then tapping "Reset Password".',
    )
  }

  showLogInError = ():void => {
    alert(
      'There was a problem signing in. Please double check your email and password.',
      )
    this.resetEmailAndPWStates()
  }

  showRecoveryError = ():void => {
    alert(
      'There was a problem sending the password recovery email. Please ensure that you created an account under this password and that your email is in a valid format (foo@foobar.com).',
      )
  }

  showRecoveryEmailAlert = ():void => {
    alert('Password recovery email successfully sent. Please check your inbox.')
  }

  showSignUpError = ():void => {
    alert('There was a problem signing up. Please ensure that you have not already signed up using this email address and that the email format is valid (foo@foobar.com).')
    this.resetEmailAndPWStates()
  }

  signUp = (email: string, password: string):void => {
    if (!email || !password) {
      alert(
        'Oops! You must enter both an email and a password.',
      )
      return
    }
    const promise = new Promise((resolve) => {
      resolve(
        firebase.auth().createUserWithEmailAndPassword(email, password),
      )
    });
    promise
          .then(() => { this.resetEmailAndPWStates() })
          .catch(() => { this.showSignUpError() })
  }

  updateEmailState = (e: Object): void => {
    this.setState({ email: e.target.value })
  }

  updatePasswordState = (e: Object): void => {
    this.setState({ password: e.target.value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <p>Sign Up or Sign In</p>
        <input
          id="email-input"
          value={email}
          placeholder="Enter Your Email Address"
          onChange={(e) => { this.updateEmailState(e) }}
        />
        <input
          id="password-input"
          value={password}
          placeholder="Enter Your Password"
          onChange={(e) => { this.updatePasswordState(e) }}
        />

        <button
          onClick={() => { this.logIn(email, password) }}
        >
        Log In
        </button>

        <div>
          <button
            onClick={() => { this.signUp(email, password) }}
          >
          Sign Up
          </button>
          <button
            onClick={() => { this.sendResetPasswordEmail(email, password) }}
          >
          Reset Password
          </button>
        </div>
        <div
          onClick={this.showHelpDialog}
        >
          <img
            src="../../public/question.png"
            alt="Question mark icon."
          />
        </div>
      </div>
    );
  }

}

export default AuthScreen;

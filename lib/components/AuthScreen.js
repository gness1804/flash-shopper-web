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
    // .then(() => { this.showLogInMicrointeraction() })
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

  showLogInMicrointeraction = ():void => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('You have successfully logged in.', ToastAndroid.SHORT)
    } else {
      Alert.alert('Login successful.')
    }
  }

  showSignUpError = ():void => {
    Alert.alert('There was a problem signing up. Please ensure that you have not already signed up using this email address and that the email format is valid (foo@foobar.com).')
    this.resetEmailAndPWStates()
  }

  showSignUpMicrointeraction = ():void => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('You have successfully signed up.', ToastAndroid.SHORT)
    } else {
      Alert.alert('Sign Up successful.')
    }
  }

  signUp = (email: string, password: string):void => {
    if (!email || !password) {
      Alert.alert(
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
          .then(() => { this.showSignUpMicrointeraction() })
          .then(() => { this.resetEmailAndPWStates() })
          .catch(() => { this.showSignUpError() })
  }

  render() {
    const { email, password } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Sign Up or Sign In</Text>
        <TextInput
          id="email-input"
          style={styles.inputField}
          value={email}
          placeholder="Enter Your Email Address"
          onChangeText={_email => this.setState({ email: _email })}
        />
        <TextInput
          id="password-input"
          style={styles.inputField}
          secureTextEntry
          value={password}
          placeholder="Enter Your Password"
          onChangeText={_password => this.setState({ password: _password })}
        />

        <View style={styles.logInButton}>
          <Button
            title="Log In"
            color={commonElements.core.button.color}
            onPress={() => { this.logIn(email, password) }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.bottomButton}>
            <Button
              title="Sign Up"
              color={commonElements.core.button.color}
              onPress={() => { this.signUp(email, password) }}
            />
          </View>
          <View style={styles.bottomButton}>
            <Button
              title="Reset Password"
              color={commonElements.core.button.color}
              onPress={() => { this.sendResetPasswordEmail(email) }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={this.showHelpDialog}
        >
          <Image
            source={require('../images/question.png')}
            style={styles.questionIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

export default AuthScreen;

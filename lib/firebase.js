import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBBKj3m4ecbaOKwXSPHzMSbdbAqR4iP2LY",
    authDomain: "grocery-list-caef5.firebaseapp.com",
    databaseURL: "https://grocery-list-caef5.firebaseio.com",
    storageBucket: "grocery-list-caef5.appspot.com",
    messagingSenderId: "322777815511"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

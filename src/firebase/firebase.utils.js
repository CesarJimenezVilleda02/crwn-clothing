import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyB-NMLS96VBD9CDGK4CYviUpGXrweeGau0",
    authDomain: "crwn-db-9c660.firebaseapp.com",
    databaseURL: "https://crwn-db-9c660.firebaseio.com",
    projectId: "crwn-db-9c660",
    storageBucket: "crwn-db-9c660.appspot.com",
    messagingSenderId: "1011102049687",
    appId: "1:1011102049687:web:63834a694cb021bee510d2",
    measurementId: "G-THLBB5PR9J"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxFUcfL9GINRhetdcBsVLpKsiJhZFr4ro",
    authDomain: "my-subscriptions-dee08.firebaseapp.com",
    projectId: "my-subscriptions-dee08",
    storageBucket: "my-subscriptions-dee08.appspot.com",
    messagingSenderId: "650006726814",
    appId: "1:650006726814:web:7e5ca5201c235a31e1d38f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
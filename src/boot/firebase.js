import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyBbvTOR6K2aE-TRLWsgF80BbbbEEp891LM",
  authDomain: "jamstack-api.firebaseapp.com",
  databaseURL: "https://jamstack-api.firebaseio.com",
  projectId: "jamstack-api",
  storageBucket: "jamstack-api.appspot.com",
  messagingSenderId: "844489125366",
  appId: "1:844489125366:web:32d92a90517a0f6a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireAuth = firebaseApp.auth();
const fireDB = firebaseApp.database();
const fireStorage = firebaseApp.storage();
const fireStoreDB = firebaseApp.firestore();
console.log(fireStoreDB);

export { fireAuth, fireDB, fireStorage, fireStoreDB };

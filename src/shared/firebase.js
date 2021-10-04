import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6L70IeajdYgQZ0GFLeM0b7BMOjB6BEhw",
  authDomain: "image-community-6847a.firebaseapp.com",
  projectId: "image-community-6847a",
  storageBucket: "image-community-6847a.appspot.com",
  messagingSenderId: "432530252511",
  appId: "1:432530252511:web:415f332db2e0297833bf6a",
  measurementId: "G-93ETHGY2JY",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export{auth, apiKey, firestore, storage, realtime};

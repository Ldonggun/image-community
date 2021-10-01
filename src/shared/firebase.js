import firebase from "firebase/compat/app";
import "firebase/compat/auth";


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

export{auth, apiKey};

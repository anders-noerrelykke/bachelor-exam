import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNWee9cljULBW_uv0SCfJZkuHcRu_I6mc",
  authDomain: "catch-of-the-day-anders-n.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-anders-n.firebaseio.com",
  projectId: "catch-of-the-day-anders-n",
  storageBucket: "catch-of-the-day-anders-n.appspot.com",
  messagingSenderId: "743410693885"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
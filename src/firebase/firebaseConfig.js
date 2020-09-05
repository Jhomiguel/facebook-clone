import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJpWeH6hPjtUJnXtey9JSDa2G2m2PD6FY",
  authDomain: "fb-clone-893f2.firebaseapp.com",
  databaseURL: "https://fb-clone-893f2.firebaseio.com",
  projectId: "fb-clone-893f2",
  storageBucket: "fb-clone-893f2.appspot.com",
  messagingSenderId: "917592176097",
  appId: "1:917592176097:web:f2fdab53b25ad9e44c8ea0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkM5NFkoj5VVOFeh0lrtSBknglfh8oMuU",
  authDomain: "docs-f2918.firebaseapp.com",
  projectId: "docs-f2918",
  storageBucket: "docs-f2918.appspot.com",
  messagingSenderId: "208995819140",
  appId: "1:208995819140:web:e9b3f2a14b2564e343acd1"
};
  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db=app.firestore()
  export {db}
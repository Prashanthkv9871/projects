import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZgUKynTi7uecH1u0dlvCGQbyzITlXFEg",
  authDomain: "test-a051f.firebaseapp.com",
  databaseURL: "https://test-a051f-default-rtdb.firebaseio.com",
  projectId: "test-a051f",
  storageBucket: "test-a051f.appspot.com",
  messagingSenderId: "432200475766",
  appId: "1:432200475766:web:1c9d9feeccaf7da8496b57",
  measurementId: "G-MZ6BS7HQNH"
};
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();
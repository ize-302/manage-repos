import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBq0UdxAAB3YHcPmQYq9RO0KdhPRnhD6o",
  authDomain: "manage-repo.firebaseapp.com",
  projectId: "manage-repo",
  storageBucket: "manage-repo.appspot.com",
  messagingSenderId: "848846644582",
  appId: "1:848846644582:web:c6fc898baf2325a46a14a7",
  measurementId: "G-TZGW3THD24",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

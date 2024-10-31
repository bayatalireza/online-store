import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz8Px7C9h3xVLNEbEtWHz0LrUF0qfRkMc",
  authDomain: "online-store-4f347.firebaseapp.com",
  projectId: "online-store-4f347",
  storageBucket: "online-store-4f347.firebasestorage.app",
  messagingSenderId: "835814474768",
  appId: "1:835814474768:web:4dbe1b297b52c349c27695"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//initiate Firestore

const db = getFirestore();
export  {db};

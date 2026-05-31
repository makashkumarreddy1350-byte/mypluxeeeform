// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDK8Ym1UassnkBjOODCaCUURv8hPXRh3lw",
  authDomain: "akash-ba8a5.firebaseapp.com",
  projectId: "akash-ba8a5",
  storageBucket: "akash-ba8a5.firebasestorage.app",
  messagingSenderId: "620643996398",
  appId: "1:620643996398:web:e2e7a282ef6dff63ebd9ff"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };
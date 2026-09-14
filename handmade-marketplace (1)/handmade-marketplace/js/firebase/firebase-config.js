// Firebase config подключён (взят из index__5_.html)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBeDVmRsPo8UGgpIpo6s2QqxAP8E7q-6Hs",
  authDomain: "openko-62d24.firebaseapp.com",
  projectId: "openko-62d24",
  storageBucket: "openko-62d24.firebasestorage.app",
  messagingSenderId: "210659697244",
  appId: "1:210659697244:web:d7f6b185ab1a1ad35e3c99",
  measurementId: "G-MK1SKLD773"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

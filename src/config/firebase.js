// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCApLtWMDbYq21q8mK0sYqM2FUfYYN25FU",
  
  projectId: "ventease-dd9fb",
  storageBucket: "eventease-dd9fb.firebasestorage.app",
  
  appId: "1:205851537428:android:a30b1c382bc62940cc7701"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

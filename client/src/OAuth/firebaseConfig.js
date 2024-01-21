// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-realestate-app.firebaseapp.com",
  projectId: "my-realestate-app",
  storageBucket: "my-realestate-app.appspot.com",
  messagingSenderId: "35094501080",
  appId: "1:35094501080:web:cad9ef39872538d9a329ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app;
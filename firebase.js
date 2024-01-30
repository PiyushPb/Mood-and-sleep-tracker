import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIPz7wuzgogXSc2vacxQCWUiLQ7srq1f4",
  authDomain: "moodtrack-a10a0.firebaseapp.com",
  projectId: "moodtrack-a10a0",
  storageBucket: "moodtrack-a10a0.appspot.com",
  messagingSenderId: "1069645012798",
  appId: "1:1069645012798:web:180afb37458684a932966f",
  measurementId: "G-ZW16VWZFM6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

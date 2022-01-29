import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdbPXLU5blgMIM0awCrKcDibC8Mh0huQA",
  authDomain: "e-commerce-a237c.firebaseapp.com",
  projectId: "e-commerce-a237c",
  storageBucket: "e-commerce-a237c.appspot.com",
  messagingSenderId: "369632133457",
  appId: "1:369632133457:web:eb6ac9ff9d4ee985bd9370",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

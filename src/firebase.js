import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_860ARz-d3qSZtS-e1GaBHVmHZ9AC0jM",
  authDomain: "student-space-24696.firebaseapp.com",
  projectId: "student-space-24696",
  storageBucket: "student-space-24696.appspot.com",
  messagingSenderId: "99140320944",
  appId: "1:99140320944:web:758556abea7542d5d1c575",
  measurementId: "G-HKW8FK0LCB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

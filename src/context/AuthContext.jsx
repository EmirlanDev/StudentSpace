import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHECK_USER": {
      return { ...state, user: action.payload };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();


  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: "CHECK_USER", payload: user });
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function authWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log("error");
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  const values = { logOut, authWithGoogle, user: state.user };


  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";

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

  let n = state.user ? state.user.displayName.indexOf("1") : "";
  let l = state.user ? state.user.displayName.indexOf("2") : "";
  let p = state.user ? state.user.displayName.indexOf("3") : "";
  let d = state.user ? state.user.displayName.indexOf("?") : "";
  let u = state.user ? state.user.displayName.indexOf("#") : "";
  let de = state.user ? state.user.displayName.indexOf("<") : "";
  let lde = state.user ? state.user.displayName.indexOf(">") : "";

  let name = state.user
    ? state.user.displayName.slice(n + 1, l - 1)[0].toUpperCase() +
      state.user.displayName
        .slice(n + 1, l - 1)
        .slice(1)
        .toLowerCase()
    : "";
  let lastName = state.user
    ? state.user.displayName.slice(l + 1, p - 1)[0].toUpperCase() +
      state.user.displayName
        .slice(l + 1, p - 1)
        .slice(1)
        .toLowerCase()
    : "";
  let profession = state.user ? state.user.displayName.slice(p + 1, d - 1) : "";
  let date = state.user ? state.user.displayName.slice(d + 1, u - 1) + "*" : "";
  let univer = state.user ? state.user.displayName.slice(u + 1, de - 1) : "";
  let description = state.user ? state.user.displayName.slice(de + 1, lde) : "";

  let first = state.user ? date.indexOf("-") : "";
  let second = state.user ? date.lastIndexOf("-") : "";
  let last = state.user ? date.indexOf("*") : "";
  let year = state.user ? date.slice(0, first) : "";
  let day = state.user ? date.slice(second + 1, last) : "";
  let month = state.user ? date.slice(first + 1, second) : "";
  function checkMonth() {
    if (month == "01") {
      return "января";
    } else if (month == "02") {
      return "февраля";
    } else if (month == "03") {
      return "марта";
    } else if (month == "04") {
      return "апреля";
    } else if (month == "05") {
      return "мая";
    } else if (month == "06") {
      return "июня";
    } else if (month == "07") {
      return "июля";
    } else if (month == "08") {
      return "августа";
    } else if (month == "09") {
      return "сентября";
    } else if (month == "10") {
      return "октября";
    } else if (month == "11") {
      return "ноября";
    } else if (month == "12") {
      return "декабря";
    }
  }
  let updateDate = `${day} ${checkMonth()} ${year} года `;
  const values = {
    logOut,
    authWithGoogle,
    user: state.user,
    name,
    lastName,
    profession,
    updateDate,
    univer,
    date,
    description,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;

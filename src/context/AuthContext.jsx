import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
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
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();

  const [disName, setDisName] = useState("");

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
      state.user ? navigate("/adminPanel") : navigate("/adminPanel");
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

  function addDisName() {
    state.user ? setDisName(state.user.displayName) : setDisName("");
  }

  useEffect(() => {
    addDisName();
  }, [state.user]);

  let n = disName && disName.length > 20 ? disName.indexOf("1") : "";
  let l = disName && disName.length > 20 ? disName.indexOf("2") : "";
  let p = disName && disName.length > 20 ? disName.indexOf("3") : "";
  let d = disName && disName.length > 20 ? disName.indexOf("?") : "";
  let u = disName && disName.length > 20 ? disName.indexOf("#") : "";
  let de = disName && disName.length > 20 ? disName.indexOf("<") : "";
  let lde = disName && disName.length > 20 ? disName.indexOf(">") : "";

  let name =
    disName && disName.length > 20
      ? disName.slice(n + 1, l)[0].toUpperCase() +
        disName
          .slice(n + 1, l)
          .slice(1)
          .toLowerCase()
      : "";
  let lastName =
    disName && disName.length > 20
      ? disName.slice(l + 1, p)[0].toUpperCase() +
        disName
          .slice(l + 1, p)
          .slice(1)
          .toLowerCase()
      : "";
  let profession = disName ? disName.slice(p + 1, d) : "";
  let date = disName ? disName.slice(d + 1, u) + "*" : "";
  let univer = disName ? disName.slice(u + 1, de) : "";
  let description = disName ? disName.slice(de + 1, lde) : "";

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
    univer,
    date,
    description,
    disName,
    updateDate,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;

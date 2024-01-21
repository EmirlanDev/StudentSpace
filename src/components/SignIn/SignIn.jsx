import React, { useState } from "react";
import signInImg from "../../images/SignIn.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { MdErrorOutline } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user, authWithGoogle } = useAuthContext();

  function handleSignInSubmit() {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {})
      .catch((error) => {
        setError(error.message);
      });
  }
  let first = error.indexOf("/");
  let last = error.lastIndexOf(")");

  return (
    <section id="signIn">
      <img className="mainImg" src={signInImg} alt="signIn" />
      <div className="signIn">
        <h1>Добро пожаловать</h1>
        <div className="form">
          <label>Почта</label>
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="text"
            placeholder="Введите свою почту"
          />
          <label>Пароль</label>
          <input
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type={eye ? "text" : "password"}
            placeholder="Введите свой пароль"
          />
          {error ? (
            <div className="error">
              <MdErrorOutline style={{ fontSize: "25px" }} />
              {error.slice(first + 1, last)}
            </div>
          ) : null}
          {eye ? (
            <IoEyeOutline onClick={() => setEye(false)} className="eye" />
          ) : (
            <IoEyeOffOutline onClick={() => setEye(true)} className="eye" />
          )}
          <button
            onClick={() => {
              handleSignInSubmit();
              user ? navigate("/adminPanel") : navigate("");
            }}
          >
            Вход
          </button>
        </div>
        <h2>
          У вас нет аккаунта?
          <span onClick={() => navigate("/signUp")}>Зарегистрироваться</span>
        </h2>
        <p>Или</p>
        <div className="btns">
          <button
            onClick={() => {
              authWithGoogle();
              setTimeout(() => {
                navigate("/adminPanel");
              }, 5000);
            }}
          >
            <img src={google} alt="google" /> Google
          </button>
          <button>
            <img src={facebook} alt="facebook" /> Fasebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

import React, { useState } from "react";
import signIn from "../../images/SignIn.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="signIn">
      <img className="mainImg" src={signIn} alt="signIn" />
      <div className="signIn">
        <h1>Добро пожаловать</h1>
        <form>
          <label>Почта</label>
          <input type="text" placeholder="Введите свою почту" />
          <label>Пароль</label>
          <input
            type={eye ? "text" : "password"}
            placeholder="Введите свой пароль"
          />
          {eye ? (
            <IoEyeOutline onClick={() => setEye(false)} className="eye" />
          ) : (
            <IoEyeOffOutline onClick={() => setEye(true)} className="eye" />
          )}
          <button onClick={() => navigate("/adminPanel")}>Вход</button>
        </form>
        <h2>
          У вас нет аккаунта?{" "}
          <span onClick={() => navigate("/signUp")}>Зарегистрироваться</span>
        </h2>
        <p>Или</p>
        <div className="btns">
          <button>
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

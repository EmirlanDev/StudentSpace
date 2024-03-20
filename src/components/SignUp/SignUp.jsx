import { useEffect, useState } from "react";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./../../context/AuthContext";
import { MdErrorOutline } from "react-icons/md";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../firebase";

const SignUp = () => {
  const [eye, setEye] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, authWithGoogle } = useAuthContext();
  // console.log(user);

  function register() {
    createUserWithEmailAndPassword(auth, email, passsword)
      .then((res) => {
        let person = res.user;
        updateProfile(person, {
          displayName: `${name ? name : ""} ${lastName ? lastName : ""}`,
          photoURL: "https://cdn-icons-png.freepik.com/512/3177/3177440.png",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  useEffect(() => {
    user ? navigate("/adminPanel") : navigate("");
  }, []);

  let first = error.indexOf("/");
  let last = error.lastIndexOf(")");

  return (
    <section id="signUp">
      <div className="containerTwo">
        <div className="signUp">
          <div className="form">
            <h1>Регистрация</h1>
            <label>Имя</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Введите свое имя"
            />
            <label>Фамилие</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Введите свое фамилие"
            />
            <label>Почта</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Введите свою почту"
            />
            <label>Пароль*</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={eye ? "text" : "password"}
              placeholder="Введите свой пароль"
            />
            {eye ? (
              <IoEyeOutline onClick={() => setEye(false)} className="eye" />
            ) : (
              <IoEyeOffOutline onClick={() => setEye(true)} className="eye" />
            )}

            <label onClick={() => setCheckBox(!checkBox)} className="checkBox">
              <div
                style={{
                  background: checkBox ? "" : "transparent",
                  border: checkBox ? "" : "1px solid rgba(0, 0, 0, 0.5)",
                }}
              >
                <svg
                  style={{ display: checkBox ? "" : "none" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                >
                  <path
                    d="M4.95582 7.40485L2.00059 4.56584L0.185547 6.31749L4.95839 10.9007L13.5786 2.60513L11.7609 0.855957L4.95582 7.40485Z"
                    fill="white"
                  />
                </svg>
              </div>
              Согласен с Условиями
            </label>
            {error ? (
              <div className="error">
                <MdErrorOutline style={{ fontSize: "25px" }} />
                {error.slice(first + 1, last)}
              </div>
            ) : null}
            <button onClick={register} className="regist">
              Зарегистрироваться
            </button>
            <p>Или</p>
            <div className="btns">
              <button
                onClick={() => {
                  authWithGoogle();
                }}
              >
                <img src={google} alt="google" /> Google
              </button>
              <button>
                <img src={facebook} alt="facebook" /> Fasebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

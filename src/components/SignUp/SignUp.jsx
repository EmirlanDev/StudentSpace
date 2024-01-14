import { useState } from "react";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [eye, setEye] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="signUp">
      <div className="containerTwo">
        <div className="signUp">
          <form>
            <h1>Регистрация</h1>
            <label>Имя</label>
            <input type="text" placeholder="Введите свое имя" />
            <label>Фамилие</label>
            <input type="text" placeholder="Введите свое фамилие" />
            <label>Почта</label>
            <input type="text" placeholder="Введите свою почту" />
            <label>Пароль*</label>
            <input
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
            <button onClick={() => navigate("/adminPanel")} className="regist">
              Зарегистрироваться
            </button>
            <p>Или</p>
            <div className="btns">
              <button>
                <img src={google} alt="google" /> Google
              </button>
              <button>
                <img src={facebook} alt="facebook" /> Fasebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

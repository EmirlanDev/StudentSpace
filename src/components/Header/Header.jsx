import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1 onClick={() => navigate("/")}>
            Student <br /> Space
          </h1>
          <nav>
            <Link>Консультация</Link>
            <Link>Контакты</Link>
            <button className="signIn" onClick={() => navigate("/signIn")}>
              Войти
            </button>
            <button onClick={() => setMenu(!menu)} className="burger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none">
                <path
                  d="M7.2915 10.208H27.7082"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.2915 17.5H27.7082"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.2915 24.792H27.7082"
                  stroke="#33363F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <nav style={{ transform: menu ? "translateX(0%)" : "" }} className="menu">
        <Link>Консультация</Link>
        <Link>Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;

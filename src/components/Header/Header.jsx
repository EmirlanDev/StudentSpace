import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
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
            <button onClick={() => navigate("/signIn")}>Войти</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

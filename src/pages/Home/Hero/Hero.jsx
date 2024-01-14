import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="homeHero">
      <div className="container">
        <div className="homeHero">
          <h1>
            Ваш универсальный <br /> инструмент для успеха в учебе
          </h1>
          <button onClick={() => navigate("/signUp")}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

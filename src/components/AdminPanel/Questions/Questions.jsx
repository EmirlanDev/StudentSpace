import { useState } from "react";
import Creative from "./Creative/Creative";
import Machine from "./Machine/Machine";
import Math from "./Math/Math";
import Programming from "./Programming/Programming";

const Questions = () => {
  const [math, setMath] = useState(true);
  const [auto, setAuto] = useState(false);
  const [prog, setProg] = useState(false);
  const [mass, setMass] = useState(false);
  return (
    <section id="questions">
      <div className="questions">
        <nav>
          <button
            style={{ background: math ? "#E5E5E5" : "" }}
            onClick={() => {
              setMath(true);
              setAuto(false);
              setProg(false);
              setMass(false);
            }}
          >
            Математика
          </button>
          <button
            style={{ background: auto ? "#E5E5E5" : "" }}
            onClick={() => {
              setMath(false);
              setAuto(true);
              setProg(false);
              setMass(false);
            }}
          >
            Машинное обучение
          </button>
          <button
            style={{ background: prog ? "#E5E5E5" : "" }}
            onClick={() => {
              setMath(false);
              setAuto(false);
              setProg(true);
              setMass(false);
            }}
          >
            Введение в программирование
          </button>
          <button
            style={{ background: mass ? "#E5E5E5" : "" }}
            onClick={() => {
              setMath(false);
              setAuto(false);
              setProg(false);
              setMass(true);
            }}
          >
            Креативное письмо
          </button>
        </nav>
        <div className="questions__add-search">
          <button className="questions__add-search__btn">Задать вопрос?</button>
          <label>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                    fill="#808080"
                  />
                </g>
              </svg>
            </button>
            <input type="search" placeholder="Поиск" />
          </label>
        </div>
        <div className="questions__page">
          {math ? (
            <Math />
          ) : auto ? (
            <Machine />
          ) : prog ? (
            <Programming />
          ) : mass ? (
            <Creative />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Questions;

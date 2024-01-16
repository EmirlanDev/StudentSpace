import React from "react";

const Creative = () => {
  return (
    <section id="creative">
      <div className="creatives">
        <div className="creatives__cart">
          <div className="creatives__cart__title">
            <div className="creatives__cart__title__profil">
              <img
                src="https://avatars.githubusercontent.com/u/147941140?v=4"
                alt="profil"
              />
              <div className="creatives__cart__title__profil__text">
                <h2>Эмирлан Амангелдиев</h2>
                <h3>Студентк Motion Web</h3>
              </div>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.192 6.34399L11.949 10.586L7.70697 6.34399L6.29297 7.75799L10.535 12L6.29297 16.242L7.70697 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z"
                  fill="black"
                  fill-opacity="0.44"
                />
              </svg>
            </button>
          </div>
          <div className="creatives__cart__massage">
            <h3>Что такое матрицы и какие операции можно выполнить с ними?</h3>
            <p>20 минут назад</p>
            <div className="creatives__cart__massage__btns">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1.45965 7.0218C1.44288 7.32149 1.61058 7.60076 1.88329 7.72618L7.35496 10.236L9.86475 15.7069C9.98434 15.9665 10.2439 16.132 10.5276 16.132L10.5691 16.1306C10.7155 16.1224 10.8559 16.0702 10.9722 15.981C11.0885 15.8918 11.1752 15.7696 11.221 15.6303L15.3007 3.21118C15.386 2.95013 15.3175 2.66211 15.1235 2.46743C14.9295 2.27274 14.6423 2.20638 14.3798 2.29024L1.95986 6.36993C1.82062 6.41572 1.69842 6.50241 1.60919 6.6187C1.51996 6.73498 1.46785 6.87546 1.45965 7.0218ZM13.4646 4.12628L10.4153 13.4086L8.56756 9.38211C8.49489 9.22337 8.36756 9.09604 8.20882 9.02336L4.1809 7.17565L13.4646 4.12628Z"
                    fill="#424242"
                  />
                </svg>
                Ответить
              </button>
              <button>Комментарии 19</button>
              <button>Ответы 9</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;

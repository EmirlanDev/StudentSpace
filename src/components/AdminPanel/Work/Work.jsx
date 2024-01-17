import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const Work = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="work">
          <div className="work__inputGroup">
            <svg
              style={{
                margin: "12px 12px",
                zIndex: "9",
                position: "absolute",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.7">
                <path
                  d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                  fill="black"
                />
              </g>
            </svg>
            <form>
              <input type="text" placeholder="Поиск" />
            </form>
            <div className="work__inputGroup__menu">
              <span style={{ fontSize: "22px" }}>
                <IoMenuSharp />
              </span>
            </div>
          </div>
          <div className="work__jobInform">
            <div className="work__jobInform__vacancy">
              <p>Вакансии</p>
            </div>
            <div className="work__jobInform__summary">
              <p>Резюме</p>
            </div>
            <div className="work__jobInform__company">
              <p>Компании</p>
            </div>
          </div>
          <div className="work__jobGroup">
            <p className="work__jobGroup__web">
              Fullstack web-разработчик (Laravel + Vue JS)
            </p>
            <p className="work__jobGroup__price">50 000 c</p>
            <div
              className="work__jobGroup__violeta"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <p>Violetta</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 3 25 25"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M4.035 15.479C4.01193 15.6517 4.00024 15.8258 4 16C4 18.378 6.138 20.284 8.521 19.964C9.214 21.198 10.534 22 12 22C13.466 22 14.786 21.198 15.479 19.964C17.857 20.284 20 18.378 20 16C20 15.827 19.988 15.653 19.965 15.479C21.198 14.786 22 13.465 22 12C22 10.535 21.198 9.214 19.965 8.521C19.988 8.347 20 8.173 20 8C20 5.622 17.857 3.712 15.479 4.036C14.786 2.802 13.466 2 12 2C10.534 2 9.214 2.802 8.521 4.036C6.138 3.712 4 5.622 4 8C4 8.173 4.012 8.347 4.035 8.521C2.802 9.214 2 10.535 2 12C2 13.465 2.802 14.786 4.035 15.479ZM5.477 10.076L6.579 9.783L6.145 8.73C6.04981 8.49836 6.00056 8.25043 6 8C6 6.897 6.897 6 8 6C8.247 6 8.499 6.05 8.73 6.145L9.784 6.579L10.077 5.477C10.1899 5.05316 10.4396 4.67848 10.7873 4.41121C11.1351 4.14393 11.5614 3.99903 12 3.99903C12.4386 3.99903 12.8649 4.14393 13.2127 4.41121C13.5604 4.67848 13.8101 5.05316 13.923 5.477L14.216 6.579L15.27 6.145C15.501 6.05 15.753 6 16 6C17.103 6 18 6.897 18 8C18 8.247 17.95 8.5 17.855 8.73L17.421 9.783L18.523 10.076C18.9458 10.1903 19.3193 10.4406 19.5856 10.7884C19.8518 11.1362 19.9961 11.562 19.9961 12C19.9961 12.438 19.8518 12.8638 19.5856 13.2116C19.3193 13.5594 18.9458 13.8097 18.523 13.924L17.421 14.217L17.855 15.27C17.95 15.5 18 15.753 18 16C18 17.103 17.103 18 16 18C15.753 18 15.501 17.95 15.27 17.855L14.216 17.421L13.923 18.523C13.8101 18.9468 13.5604 19.3215 13.2127 19.5888C12.8649 19.8561 12.4386 20.001 12 20.001C11.5614 20.001 11.1351 19.8561 10.7873 19.5888C10.4396 19.3215 10.1899 18.9468 10.077 18.523L9.784 17.421L8.73 17.855C8.49834 17.9501 8.25042 17.9994 8 18C6.897 18 6 17.103 6 16C6 15.753 6.05 15.5 6.145 15.27L6.579 14.217L5.477 13.924C5.05416 13.8097 4.68073 13.5594 4.41445 13.2116C4.14817 12.8638 4.00388 12.438 4.00388 12C4.00388 11.562 4.14817 11.1362 4.41445 10.7884C4.68073 10.4406 5.05416 10.1903 5.477 10.076Z"
                    fill="black"
                  />
                  <path
                    d="M15.742 10.71L14.334 9.29004L11.003 12.589L9.707 11.293L8.293 12.707L10.997 15.411L15.742 10.71Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            <p className="work__jobGroup__bish">Бишкек</p>
            <div
              className="work__jobGroup__exper"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V8C22 6.897 21.103 6 20 6ZM15 4V6H9V4H15ZM8 8H20V11H4V8H8ZM4 19V13H10V15H14V13H20L20.001 19H4Z"
                    fill="black"
                  />
                </g>
              </svg>
              <p>Опыт работы от 3 до 6 лет</p>
            </div>
            <div
              className="work__jobGroup__direction"
              style={{ display: "flex", gap: "10px" }}
            >
              <div className="work__jobGroup__direction__blockOne">
                <p>Отклик без резюме</p>
              </div>
              <div className="work__jobGroup__direction__blockTwo">
                <p>Можно из дома</p>
              </div>
            </div>
            <button>Откликнуться</button>
          </div>
          <div className="work__jobGroup">
            <p className="work__jobGroup__web">Репетитор английского языка</p>
            <p className="work__jobGroup__price">10 000 c</p>

            <p className="work__jobGroup__bish">Бишкек</p>
            <div
              className="work__jobGroup__exper"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V8C22 6.897 21.103 6 20 6ZM15 4V6H9V4H15ZM8 8H20V11H4V8H8ZM4 19V13H10V15H14V13H20L20.001 19H4Z"
                    fill="black"
                  />
                </g>
              </svg>
              <p>Опыт работы от 3 до 6 лет</p>
            </div>
            <div
              className="work__jobGroup__direction"
              style={{ display: "flex", gap: "10px" }}
            >
              <div className="work__jobGroup__direction__blockOne">
                <p>Отклик без резюме</p>
              </div>
              <div className="work__jobGroup__direction__blockTwo">
                <p>Можно из дома</p>
              </div>
            </div>
            <button>Откликнуться</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

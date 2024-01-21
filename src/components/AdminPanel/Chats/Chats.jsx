import React from "react";

const Chats = () => {
  return (
    <section id="chat">
      <div className="chat">
        <h1 className="chat__title">Чаты</h1>
        <div className="chat__input">
          <svg
            style={{
              marginLeft: "9px",
              zIndex: "9",
              position: "absolute",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none">
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
        </div>
        <div className="chat__panel">
          <div className="chat__panel__person">
            <div className="chat__panel__person__logo">
              <img
                style={{ width: "63px", height: "63px" }}
                src="https://nypost.com/wp-content/uploads/sites/2/2020/12/yael-most-beautiful-video.jpg?quality=75&strip=all"
                alt=""
              />
            </div>
            <div className="chat__panel__person__message">
              <h2>Бека</h2>
              <p>Где ты?</p>
            </div>
          </div>
          <div className="chat__panel__time">
            <p>Сегодня, 8:56</p>
          </div>
        </div>
        <div className="chat__panel">
          <div className="chat__panel__person">
            <div className="chat__panel__person__logo">
              <img
                style={{ width: "63px", height: "63px" }}
                src="https://nypost.com/wp-content/uploads/sites/2/2020/12/yael-most-beautiful-video.jpg?quality=75&strip=all"
                alt=""
              />
            </div>
            <div className="chat__panel__person__message">
              <h2>Бека</h2>
              <p>Где ты?</p>
            </div>
          </div>
          <div className="chat__panel__time">
            <p>Сегодня, 8:56</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chats;

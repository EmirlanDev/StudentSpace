import React from "react";
import { useAuthContext } from "./../../../context/AuthContext";

const Profil = () => {
  const { user } = useAuthContext();
  return (
    <section id="profil">
      <h1 className="title">Профиль</h1>
      <div className="profil">
        <img
          className="profil__background"
          src="https://www.omfif.org/wp-content/uploads/2022/10/ocean-economy-newweb.png"
          alt="background"
        />
        <div className="profil__info">
          <div className="profil__info__text-name">
            <img
              src={
                user
                  ? user.photoURL
                  : "https://cdn-icons-png.freepik.com/512/3177/3177440.png"
              }
              alt="profil"
              className="profilImg"
            />
            <div className="profil__info__text-name__edit">
              <div>
                <h2>{user ? user.displayName : "Ваше Имя "}</h2>
                <h3>Front-end developer</h3>
              </div>
              <button>Редактировать</button>
            </div>
          </div>
          <div className="profil__info__descr">
            <h4>Описание:</h4>
            <p>
              Модель подписки и размещение рекламы предоставляют потенциальные
              источники дохода для проекта. На основе анализа рынка можно
              сделать вывод, что "Students Space" имеет потенциал привлечь
            </p>
          </div>
          <div className="profil__info__univer">
            <h4>Университет:</h4>
            <p>Motion Web</p>
          </div>
          <div className="profil__info__date">
            <h4>Дата рождения:</h4>
            <p>5 февраля 2004 года </p>
          </div>
          <div className="profil__info__mob">
            <h4>Соц. сети:</h4>
            <p>gulzina@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;

import React from "react";

const Profil = () => {
  return (
    <section id="profil">
      <h1>Профиль</h1>
      <div className="profil">
        <img
          className="profil__background"
          src="https://www.omfif.org/wp-content/uploads/2022/10/ocean-economy-newweb.png"
          alt="background"
        />
        <div className="profil__info">
          <div className="profil__info__text-name">
            <img
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/58a6ac1f695c70ff57eff5ec7c293ff3.jpeg?lk3s=a5d48078&x-expires=1705485600&x-signature=DdjYdqCpJbITzGRWCl6sAQfgR5A%3D"
              alt="profil"
              className="profilImg"
            />
            <div className="profil__info__text-name__edit">
              <div>
                <h2>Гульзина Кайыпбекова</h2>
                <h3>Software Engineer</h3>
              </div>
              <button>Редактировать</button>
            </div>
          </div>
          <div className="profil__info__descr">
            <h4>Описание:</h4>
            <p>
              Модель подписки и размещение рекламы предоставляют потенциальные
              источники дохода для проекта. На основе анализа рынка можно
              сделать вывод, что "Students Space" имеет потенциал привлечь{" "}
            </p>
          </div>
          <div className="profil__info__univer">
            <h4>Университет:</h4>
            <p>Motion Web</p>
          </div>
          <div className="profil__info__date">
            <h4>Дата рождения:</h4>
            <p>15 июля 2004 года </p>
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

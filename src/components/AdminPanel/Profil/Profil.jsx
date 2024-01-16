import React from "react";

const Profil = () => {
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
              src="https://instagram.ffru9-1.fna.fbcdn.net/v/t39.30808-6/357399862_18010812205738272_7159973620911885097_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.ffru9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ndjitXZtpJAAX8CQ4mw&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEzODg0MzY3MzQyMDQyOTIyNA%3D%3D.2-ccb7-5&oh=00_AfDSG_m6ubVgnXsa2jCVmHLZfa_FsmuIuANPkmU_usO9Jg&oe=65AA2C5B&_nc_sid=ee9879"
              alt="profil"
              className="profilImg"
            />
            <div className="profil__info__text-name__edit">
              <div>
                <h2>Гульзина Кайыпбек кызы</h2>
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
              сделать вывод, что "Students Space" имеет потенциал привлечь{" "}
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

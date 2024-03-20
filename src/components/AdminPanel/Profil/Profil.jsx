import React from "react";
import { useAuthContext } from "./../../../context/AuthContext";
import { useStateContext } from "./../../../context/StateContext";
const Profil = () => {
  const {
    user,
    name,
    lastName,
    profession,
    date,
    univer,
    description,
    disName,
    updateDate,
  } = useAuthContext();
  const { setModal } = useStateContext();
  console.log(user);
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
                user && user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.freepik.com/512/3177/3177440.png"
              }
              alt="profil"
              className="profilImg"
            />
            <div className="profil__info__text-name__edit">
              <div>
                <h2>
                  {user && disName.length > 30
                    ? `${name} ${lastName}`
                    : user && disName.length < 20
                    ? user.displayName
                    : "Ваше Имя"}
                </h2>
                <h3>
                  {user && disName.length > 20 ? profession : "Ваша Профессия"}
                </h3>
              </div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    setModal(true);
                  }, 1);
                }}
              >
                Редактировать
              </button>
            </div>
          </div>
          <div className="profil__info__descr">
            <h4>Описание:</h4>
            <p>
              {user && disName.length > 20
                ? description
                : `Модель подписки и размещение рекламы предоставляют потенциальные
              источники дохода для проекта. На основе анализа рынка можно
              сделать вывод, что "Students Space" имеет потенциал привлечь`}
            </p>
          </div>
          <div className="profil__info__univer">
            <h4>Университет:</h4>
            <p>{user && disName.length > 20 ? univer : "Ваш Университет"}</p>
          </div>
          <div className="profil__info__date">
            <h4>Дата рождения:</h4>
            <p>
              {date !== "*" && user && disName.length > 20
                ? updateDate
                : "Ваша дата рождения"}
            </p>
          </div>
          <div className="profil__info__mob">
            <h4>Соц. сети:</h4>
            <p>{user ? user.email : "Ваша gmail почта"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;

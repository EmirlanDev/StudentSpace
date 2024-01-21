import React, { useEffect, useState } from "react";
import { useAuthContext } from "./../../../context/AuthContext";
import { useStateContext } from "./../../../context/StateContext";
const Profil = () => {
  const { user } = useAuthContext();
  const { setModal } = useStateContext();
  // const [dataUser, setDataUser] = useState(null);

  // async function parseUser() {
  //   if (user?.displayName !== undefined) {
  //     try {
  //       let jsonData = await JSON.parse(user?.displayName);
  //       setDataUser(jsonData);
  //       console.log(jsonData);
  //     } catch (error) {
  //       console.error("Ошибка при парсинге JSON:", error);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   parseUser();
  // }, []);

  // console.log(dataUser);

  // console.log(JSON.parse(user?.displayName));

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
                <h2>{"Ваше Имя"}</h2>
                <h3>{"Ваша Профессия"}</h3>
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
              {`Модель подписки и размещение рекламы предоставляют потенциальные
              источники дохода для проекта. На основе анализа рынка можно
              сделать вывод, что "Students Space" имеет потенциал привлечь`}
            </p>
          </div>
          <div className="profil__info__univer">
            <h4>Университет:</h4>
            <p>{"Ваш Университет"}</p>
          </div>
          <div className="profil__info__date">
            <h4>Дата рождения:</h4>
            <p>{"Ваша дата рождения"} </p>
          </div>
          <div className="profil__info__mob">
            <h4>Соц. сети:</h4>
            <p>{"Ваша "}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;

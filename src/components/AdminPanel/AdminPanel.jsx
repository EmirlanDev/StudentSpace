import React from "react";
import { useStateContext } from "./../../context/StateContext";
import NetWorking from "./NetWorking/NetWorking";
import News from "./News/News";
import Profil from "./Profil/Profil";
import Questions from "./Questions/Questions";
import StudyRoom from "./StudyRoom/StudyRoom";
import Event from "./Event/Event";
import Chats from "./Chats/Chats";
import Work from "./Work/Work";
import Detail from "./News/DetailPage/Detail";
import Board from "./Board/Board";
import { useAuthContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "./Profil/Modal/Modal";

const AdminPanel = () => {
  const {
    profil,
    setProfil,
    news,
    setNews,
    question,
    setQuestion,
    networking,
    setNetworking,
    studyRoom,
    setStudyRoom,
    event,
    setEvent,
    chats,
    setChats,
    work,
    setWork,
    newsDetail,
    setNewsDetail,
    menu,
    setMenu,
    board,
    setBoard,
    modal,
  } = useStateContext();

  const { user, logOut, name, lastName, univer } = useAuthContext();
  const navigate = useNavigate();

  return (
    <section id="adminPanel">
      <div
        style={{ transform: menu ? "translateX(0)" : "" }}
        className="adminPanel"
      >
        <svg
          onClick={() => setMenu(false)}
          className="adminPanel__back"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path
            d="M5.707 0L0 5.707L5.707 11.414L7.121 10L2.828 5.707L7.121 1.414L5.707 0Z"
            fill="white"
          />
        </svg>
        <div
          onClick={() => {
            setProfil(true);
            setNews(false);
            setQuestion(false);
            setNetworking(false);
            setStudyRoom(false);
            setEvent(false);
            setChats(false);
            setWork(false);
            setNewsDetail(false);
            setMenu(false);
            setBoard(false);
          }}
          className="adminPanel__profil"
        >
          <img
            src={
              user
                ? user.photoURL
                : "https://cdn-icons-png.freepik.com/512/3177/3177440.png"
            }
            alt="profil"
          />
          <div className="adminPanel__profil__text">
            <h2>
              {name || lastName
                ? `${name} ${lastName}` || user.displayName
                : "Ваше имя"}
            </h2>
            <h3>Студент {univer}</h3>
          </div>
        </div>
        <nav>
          <li
            style={{
              background: news || newsDetail ? "#fff" : "",
              color: news || newsDetail ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(true);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Новости
          </li>
          <li
            style={{
              background: question ? "#fff" : "",
              color: question ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(true);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Вопросы
          </li>
          <li
            style={{
              background: networking ? "#fff" : "",
              color: networking ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(true);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Нетворкинг
          </li>
          <li
            style={{
              background: studyRoom ? "#fff" : "",
              color: studyRoom ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(true);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Учебные комнаты
          </li>
          <li
            style={{
              background: event ? "#fff" : "",
              color: event ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(true);
              setChats(false);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Мероприятия
          </li>
          <li
            style={{
              background: chats ? "#fff" : "",
              color: chats ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(true);
              setWork(false);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Чаты
          </li>
          <li
            style={{
              background: work ? "#fff" : "",
              color: work ? "#1D53C5" : "",
            }}
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(true);
              setNewsDetail(false);
              setMenu(false);
              setBoard(false);
            }}
          >
            Работа
          </li>
          <li
            onClick={() => {
              logOut();
              navigate("/");
            }}
          >
            Выйти
          </li>
        </nav>
      </div>
      <div
        onClick={() => setMenu(false)}
        style={{ opacity: menu ? "1" : "0", zIndex: menu ? "" : "-100" }}
        className="bg"
      ></div>
      <div className="pages">
        <svg
          style={{ display: newsDetail ? "none" : "" }}
          onClick={() => setMenu(true)}
          className="pages__menu"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <circle
            cx="17.4998"
            cy="17.5"
            r="1.45833"
            transform="rotate(-90 17.4998 17.5)"
            stroke="#33363F"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle
            cx="17.4998"
            cy="26.25"
            r="1.45833"
            transform="rotate(-90 17.4998 26.25)"
            stroke="#33363F"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle
            cx="17.4998"
            cy="8.75004"
            r="1.45833"
            transform="rotate(-90 17.4998 8.75004)"
            stroke="#33363F"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {profil ? (
          <Profil />
        ) : news ? (
          <News />
        ) : question ? (
          <Questions />
        ) : networking ? (
          <NetWorking />
        ) : studyRoom ? (
          <StudyRoom />
        ) : event ? (
          <Event />
        ) : chats ? (
          <Chats />
        ) : work ? (
          <Work />
        ) : newsDetail ? (
          <Detail />
        ) : board ? (
          <Board />
        ) : null}
      </div>
      {modal ? <Modal /> : null}
    </section>
  );
};

export default AdminPanel;

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
  } = useStateContext();

  console.log(profil);

  return (
    <section id="adminPanel">
      <div className="adminPanel">
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
          }}
          className="adminPanel__profil"
        >
          <img
            src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?cs=srgb&dl=pexels-ali-pazani-2625122.jpg&fm=jpg"
            alt="profil"
          />
          <div className="adminPanel__profil__text">
            <h2>Алия Акматова</h2>
            <h3>Студент УЦА</h3>
          </div>
        </div>
        <nav>
          <li
            style={{
              background: news ? "#fff" : "",
              color: news ? "#1D53C5" : "",
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
            }}
          >
            Работа
          </li>
        </nav>
      </div>
      <div className="pages">
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
        ) : (
          <Profil />
        )}
      </div>
    </section>
  );
};

export default AdminPanel;

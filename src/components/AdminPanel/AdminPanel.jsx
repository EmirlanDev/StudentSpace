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
            setNewsDetail(false);
          }}
          className="adminPanel__profil"
        >
          <img
            src="https://instagram.ffru9-1.fna.fbcdn.net/v/t39.30808-6/357399862_18010812205738272_7159973620911885097_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.ffru9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ndjitXZtpJAAX8CQ4mw&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzEzODg0MzY3MzQyMDQyOTIyNA%3D%3D.2-ccb7-5&oh=00_AfDSG_m6ubVgnXsa2jCVmHLZfa_FsmuIuANPkmU_usO9Jg&oe=65AA2C5B&_nc_sid=ee9879"
            alt="profil"
          />
          <div className="adminPanel__profil__text">
            <h2>Гульзина Кайыпбек кызы</h2>
            <h3>Студентка Motion Web</h3>
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
        ) : newsDetail ? (
          <Detail />
        ) : null}
      </div>
    </section>
  );
};

export default AdminPanel;

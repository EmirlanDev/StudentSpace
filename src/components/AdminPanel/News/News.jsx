import React from "react";
import { useStateContext } from "./../../../context/StateContext";

const News = () => {
  const {
    setProfil,
    setNews,
    setQuestion,
    setNetworking,
    setStudyRoom,
    setEvent,
    setChats,
    setWork,
    setNewsDetail,
  } = useStateContext();

  return (
    <section id="news">
      <h1 className="title">Новости</h1>
      <div className="news">
        <div className="news__carts">
          <div
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(true);
            }}
            className="news__carts__cart"
          >
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg"
              alt="news_cart"
            />
            <div className="news__carts__cart__text">
              <h2>Chat GPT сегодня исполнилось 3 года</h2>
              <h6>12 ноября 2021 года </h6>
              <p>
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка можно
                сделать вывод, что "Students Space" имеет потенциал привлечь
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(true);
            }}
            className="news__carts__cart"
          >
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg"
              alt="news_cart"
            />
            <div className="news__carts__cart__text">
              <h2>Chat GPT сегодня исполнилось 3 года</h2>
              <h6>12 ноября 2021 года </h6>
              <p>
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка можно
                сделать вывод, что "Students Space" имеет потенциал привлечь
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(true);
            }}
            className="news__carts__cart"
          >
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg"
              alt="news_cart"
            />
            <div className="news__carts__cart__text">
              <h2>Chat GPT сегодня исполнилось 3 года</h2>
              <h6>12 ноября 2021 года </h6>
              <p>
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка можно
                сделать вывод, что "Students Space" имеет потенциал привлечь
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(true);
            }}
            className="news__carts__cart"
          >
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg"
              alt="news_cart"
            />
            <div className="news__carts__cart__text">
              <h2>Chat GPT сегодня исполнилось 3 года</h2>
              <h6>12 ноября 2021 года </h6>
              <p>
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка можно
                сделать вывод, что "Students Space" имеет потенциал привлечь
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setProfil(false);
              setNews(false);
              setQuestion(false);
              setNetworking(false);
              setStudyRoom(false);
              setEvent(false);
              setChats(false);
              setWork(false);
              setNewsDetail(true);
            }}
            className="news__carts__cart"
          >
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg"
              alt="news_cart"
            />
            <div className="news__carts__cart__text">
              <h2>Chat GPT сегодня исполнилось 3 года</h2>
              <h6>12 ноября 2021 года </h6>
              <p>
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка можно
                сделать вывод, что "Students Space" имеет потенциал привлечь
                Модель подписки и размещение рекламы предоставляют потенциальные
                источники дохода для проекта. На основе анализа рынка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

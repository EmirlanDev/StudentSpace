import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

const StateContext = ({ children }) => {
  const [profil, setProfil] = useState(true);
  const [news, setNews] = useState(false);
  const [question, setQuestion] = useState(false);
  const [networking, setNetworking] = useState(false);
  const [studyRoom, setStudyRoom] = useState(false);
  const [event, setEvent] = useState(false);
  const [chats, setChats] = useState(false);
  const [work, setWork] = useState(false);
  const [newsDetail, setNewsDetail] = useState(false);
  const [menu, setMenu] = useState(false);

  const values = {
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
  };
  return (
    <stateContext.Provider value={values}>{children}</stateContext.Provider>
  );
};

export default StateContext;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "./../components/SignIn/SignIn";
import SignUp from "./../components/SignUp/SignUp";
import AdminPanel from "./../components/AdminPanel/AdminPanel";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/signIn", element: <SignIn />, id: 2 },
    { link: "/signUp", element: <SignUp />, id: 3 },
    { link: "/adminPanel", element: <AdminPanel />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

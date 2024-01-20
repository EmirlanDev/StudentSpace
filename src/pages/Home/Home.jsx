import React from "react";
import Carts from "./Carts/Carts";
import ColumnImg from "./ColumnImg/ColumnImg";
import Hero from "./Hero/Hero";
import Header from "./../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carts />
      <ColumnImg />
    </>
  );
};

export default Home;

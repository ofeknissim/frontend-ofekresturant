import React from "react";
import Menus from "./components/Menus";
import Popular from "./components/Popular";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Menus />
      <Popular />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import "./HomePage.scss";
import Header from "../../components/user/layout/header/Header";
import Footer from "../../components/user/layout/footer/Footer";
import Metronome from "../../components/metronome/Metronome";

const HomePage = () => {


  return (
    <main className="home-page">
      <Header />
      <article className="home-page-container">
        <h1 className="home-page-title">Landing page</h1>
        <Metronome />

        <h4>Date</h4>
      </article>

      <Footer />
    </main>
  );
};

export default HomePage;

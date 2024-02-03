import React from "react";
import HomeLayout from "./Home/HomeLayout";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="container mb-[50px]">
        <HomeLayout />
        <Navbar />
      </div>
    </>
  );
};

export default Home;

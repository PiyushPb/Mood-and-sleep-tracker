import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Chat from "./Chat";

export const formContext = createContext();

const Layout = () => {
  const [isFormTaken, setIsFormTaken] = useState(() => {
    const storedState = localStorage.getItem("quizTaken");
    return storedState ? JSON.parse(storedState) : false;
  });

  useEffect(() => {
    const resetFormStatus = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      if (now >= midnight) {
        setIsFormTaken(false);
        localStorage.removeItem("quizTaken");
      }
    };

    const intervalId = setInterval(() => {
      resetFormStatus();
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <formContext.Provider value={{ isFormTaken, setIsFormTaken }}>
              <Home />
            </formContext.Provider>
          }
        />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Navbar />
    </>
  );
};

export default Layout;

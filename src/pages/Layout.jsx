import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Chat from "./Chat";
import { useAuth } from "../auth/AuthProvider";

export const formContext = createContext();

const Layout = () => {
  const { isLoggedIn } = useAuth();
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
              {isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
            </formContext.Provider>
          }
        />
        <Route
          path="/chat"
          element={
            isLoggedIn ? <Navigate to="/chat" /> : <Navigate to="/login" />
          }
        />
      </Routes>
      <Navbar />
    </>
  );
};

export default Layout;

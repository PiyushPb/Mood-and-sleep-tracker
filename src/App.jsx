import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth } from "./auth/AuthProvider";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import CalendarData from "./pages/CalendarData";
import Profile from "./pages/Profile";

export const formContext = createContext();

function App() {
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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <formContext.Provider value={{ isFormTaken, setIsFormTaken }}>
                {isLoggedIn ? <Home /> : <Login />}
              </formContext.Provider>
            }
          ></Route>
          <Route
            path="/chat"
            element={isLoggedIn ? <Chat /> : <Login />}
          ></Route>
          <Route
            path="/calendar"
            element={isLoggedIn ? <CalendarData /> : <Login />}
          ></Route>
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

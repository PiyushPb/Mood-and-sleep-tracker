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
import Habbits from "./pages/Habbits";

export const formContext = createContext();

function App() {
  useEffect(() => {
    // Function to check and insert form data
    const checkAndInsertFormData = () => {
      // Check if form data is present in local storage
      const existingFormData = localStorage.getItem("formData");
      if (!existingFormData) {
        // Form data not present, insert the provided data
        const formData = [
          { date: "2024-01-20", mood: "3", day: "2", sleep: "1" },
          { date: "2024-01-21", mood: "2", day: "1", sleep: "3" },
          { date: "2024-01-22", mood: "1", day: "3", sleep: "2" },
          { date: "2024-01-23", mood: "3", day: "2", sleep: "1" },
          { date: "2024-01-24", mood: "2", day: "1", sleep: "3" },
          { date: "2024-01-25", mood: "3", day: "3", sleep: "2" },
          { date: "2024-01-26", mood: "4", day: "2", sleep: "1" },
          { date: "2024-01-27", mood: "3", day: "1", sleep: "3" },
          { date: "2024-01-28", mood: "1", day: "3", sleep: "2" },
          { date: "2024-01-29", mood: "1", day: "5", sleep: "5" },
          { date: "2024-01-30", mood: "2", day: "4", sleep: "1" },
          { date: "2024-02-02", mood: "1", day: "1", sleep: "3" },
          { date: "2024-02-03", mood: "1", day: "5", sleep: "3" },
        ];
        localStorage.setItem("formData", JSON.stringify(formData));
      }
    };

    // Call the function when component mounts
    checkAndInsertFormData();
  }, []);

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
          <Route path="/habbits" element={<Habbits />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

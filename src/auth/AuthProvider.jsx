import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    const user = auth.currentUser;
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "userprofiledata",
      JSON.stringify({
        username: user.displayName || "user",
        useremail: user.email || "email",
        userprofile:
          user.photoURL ||
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
      })
    );
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userprofiledata");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

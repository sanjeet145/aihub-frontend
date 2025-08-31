import { createContext, useContext, useState } from "react";
import Cookie from "js-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const login = (userData) => {
    Cookie.set("token", userData, {expires: 1/24 }); // 1 hour
  };

  const logout = () => {
    Cookie.remove("token");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useIsAuthenticated = () => {
  return !!Cookie.get("token");
};
import { createContext, useState } from "react";
import { getIsAuthenticated } from "../functions/functions";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isAuthenticated = getIsAuthenticated();

  return <AppContext.Provider value={{ token, setToken, isAuthenticated }}>{children}</AppContext.Provider>;
};

import { createContext, useContext, useReducer, useState } from "react";
import { getIsAuthenticated } from "../functions/functions";

const galleryReducer = () => {};

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [gallery, setGallery] = useReducer(galleryReducer, []);

  const isAuthenticated = getIsAuthenticated();

  return <AppContext.Provider value={{ token, setToken, isAuthenticated, gallery, setGallery }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

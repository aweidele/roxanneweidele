import { createContext, useContext, useState } from "react";

export const NewImageContext = createContext();
export const NewImageProvider = ({ children }) => {
  const [hasUploads, setHasUploads] = useState(false);
  const [files, setFiles] = useState([]);
  return <NewImageContext.Provider value={{ files, setFiles, hasUploads, setHasUploads }}>{children}</NewImageContext.Provider>;
};

export const useNewImageContext = () => useContext(NewImageContext);

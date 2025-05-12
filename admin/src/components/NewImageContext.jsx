import { createContext, useContext, useReducer } from "react";

export const NewImageContext = createContext();

const filesReducer = (state, action) => {
  switch (action.type) {
    case "add_file": {
      console.log("add_file");
      console.log(action);
      const newFile = {
        ...action.newFile[0],
      };
      return [newFile, ...state];
    }
    case "update_file": {
      console.log("update_file");
      console.log(action.result);
      const newImages = [...state];
      const newFile = {
        ...newImages[action.index],
        files: action.result,
        loading: false,
      };
      newImages[action.index] = newFile;
      return newImages;
    }
  }
};

export const NewImageProvider = ({ children }) => {
  const [files, setFiles] = useReducer(filesReducer, []);
  return <NewImageContext.Provider value={{ files, setFiles }}>{children}</NewImageContext.Provider>;
};

export const useNewImageContext = () => useContext(NewImageContext);

import { createContext, useContext, useReducer } from "react";

export const NewImageContext = createContext();

const filesReducer = (state, action) => {
  switch (action.type) {
    case "add_file": {
      const newFile = {
        ...action.newFile[0],
        title: "",
        width: "",
        height: "",
        description: "",
        price: "",
        sold: false,
        published: false,
      };
      console.log("newFile", newFile);
      return [newFile, ...state];
    }
    case "update_file": {
      const newImages = [...state];
      newImages[action.index] = { ...action.result, loading: false };
      return newImages;
    }
  }
};

export const NewImageProvider = ({ children }) => {
  const [files, setFiles] = useReducer(filesReducer, []);
  return <NewImageContext.Provider value={{ files, setFiles }}>{children}</NewImageContext.Provider>;
};

export const useNewImageContext = () => useContext(NewImageContext);

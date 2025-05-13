import { createContext, useContext, useReducer } from "react";

export const NewImageContext = createContext();

const filesReducer = (state, action) => {
  switch (action.type) {
    case "add_file": {
      const newFile = {
        ...action.newFile,
      };
      return [newFile, ...state];
    }
    case "update_file": {
      const newImages = [...state];
      const newFile = {
        ...newImages[action.index],
        files: action.result,
      };
      newImages[action.index] = newFile;
      return newImages;
    }
    case "update_artwork": {
      const { index, data } = action;
      const newArtworkData = Object.fromEntries(Object.entries(data).map(([KeyboardEvent, value]) => [KeyboardEvent, value === null ? "" : value]));

      const newArtworkState = [...state];
      newArtworkState[index] = {
        ...newArtworkState[index],
        ...newArtworkData,
        loading: false,
      };

      return newArtworkState;
    }
  }
};

export const NewImageProvider = ({ children }) => {
  const [files, setFiles] = useReducer(filesReducer, []);
  return <NewImageContext.Provider value={{ files, setFiles }}>{children}</NewImageContext.Provider>;
};

export const useNewImageContext = () => useContext(NewImageContext);

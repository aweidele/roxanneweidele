import { createContext, useContext, useReducer, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const GalleryContext = createContext();

const galleryReducer = (state, action) => {
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
        files: action.files,
      };
      newImages[action.index] = newFile;
      return newImages;
    }
    case "update_new_artwork": {
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
    case "delete_file": {
      const { index } = action;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "reorder": {
      return action.newOrder;
    }
  }
};

export const GalleryProvider = ({ children }) => {
  const { gallery: loadedGallery } = useLoaderData();
  const [gallery, setGallery] = useReducer(galleryReducer, loadedGallery);
  const newArtwork = gallery.filter((item) => item.new);
  const reorderItems = (newOrder) => setGallery({ type: "reorder", newOrder });
  return <GalleryContext.Provider value={{ gallery, setGallery, newArtwork, reorderItems }}>{children}</GalleryContext.Provider>;
};

export const useGalleryContext = () => useContext(GalleryContext);

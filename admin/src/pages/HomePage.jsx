import { HomePageContainer } from "../components/HomePageContainer";
import { GalleryProvider } from "../components/GalleryContext";
import { sortGallery, apiRequest } from "@shared";

import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <GalleryProvider>
      <HomePageContainer />
      <Outlet />
    </GalleryProvider>
  );
};

export const galleryLoader = async () => {
  const galleryData = await apiRequest();
  return sortGallery(galleryData);
};

import { HomePageContainer } from "../components/HomePageContainer";
import { GalleryProvider } from "../components/GalleryContext";
import { sortGallery } from "../functions/functions";
import { apiRequest } from "../functions/useApi";
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

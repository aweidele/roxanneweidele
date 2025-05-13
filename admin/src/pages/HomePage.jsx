import { HomePageContainer } from "../components/HomePageContainer";
import { NewImageProvider } from "../components/NewImageContext";
import { sortGallery } from "../functions/functions";
import { apiRequest } from "../functions/useApi";
import { Await, useLoaderData } from "react-router-dom";

export const HomePage = () => {
  const { published, unpublished, gallery } = useLoaderData();
  console.log(published);
  console.log(unpublished);
  console.log(gallery);
  return (
    <NewImageProvider>
      <HomePageContainer />
    </NewImageProvider>
  );
};

export const galleryLoader = async () => {
  const galleryData = await apiRequest();
  return sortGallery(galleryData);
};

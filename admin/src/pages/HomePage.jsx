import { HomePageContainer } from "../components/HomePageContainer";
import { NewImageProvider } from "../components/NewImageContext";
import { apiRequest } from "../functions/useApi";

export const HomePage = () => {
  return (
    <NewImageProvider>
      <HomePageContainer />
    </NewImageProvider>
  );
};

export const galleryLoader = async () => {
  // const { data, loading, error, request } = useApi();
  const response = await apiRequest();
  console.log("galleryLoader", response);
};

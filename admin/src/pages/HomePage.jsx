import { NewImage } from "../components/NewImage";
import { NewImageProvider } from "../components/NewImageContext";

export const HomePage = () => {
  return (
    <NewImageProvider>
      <NewImage />
    </NewImageProvider>
  );
};

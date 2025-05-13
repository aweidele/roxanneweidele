import { NewImage } from "../components/NewImage";
import { NewImageProvider } from "../components/NewImageContext";
import { Temp } from "../components/Temp";

export const HomePage = () => {
  return (
    <NewImageProvider>
      <NewImage />
      {/* <Temp /> */}
    </NewImageProvider>
  );
};

import { Gallery } from "./Gallery";
import { NewImage } from "./NewImage";
import { useNewImageContext } from "./NewImageContext";

export const HomePageContainer = () => {
  const { files } = useNewImageContext();
  return (
    <>
      <NewImage />
      {!files.length && <Gallery />}
    </>
  );
};

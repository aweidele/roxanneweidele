import { GalleryGrid } from "./GalleryGrid";
import { NewImage } from "./NewImage";
import { useNewImageContext } from "./NewImageContext";

export const HomePageContainer = () => {
  const { files } = useNewImageContext();
  return (
    <>
      <NewImage />
      {!files.length && <GalleryGrid />}
    </>
  );
};

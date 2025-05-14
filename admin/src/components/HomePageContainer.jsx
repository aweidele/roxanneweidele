import { Gallery } from "./Gallery";
import { NewImage } from "./NewImage";
import { useGalleryContext } from "./GalleryContext";

export const HomePageContainer = () => {
  const { files } = useGalleryContext();
  return (
    <>
      <NewImage />
      {!files.length && <Gallery />}
    </>
  );
};

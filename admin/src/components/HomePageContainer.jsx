import { Gallery } from "./Gallery";
import { NewImage } from "./NewImage";
import { useGalleryContext } from "./GalleryContext";

export const HomePageContainer = () => {
  const { newArtwork } = useGalleryContext();

  return (
    <>
      <NewImage />
      {!newArtwork.length && <Gallery />}
    </>
  );
};

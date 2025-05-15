import { Gallery } from "./Gallery";
import { NewImage } from "./NewImage";
import { useGalleryContext } from "./GalleryContext";

export const HomePageContainer = () => {
  const { gallery, newArtwork } = useGalleryContext();
  console.log(newArtwork);
  console.log(gallery);
  return (
    <>
      <NewImage />
      {!newArtwork.length && <Gallery />}
    </>
  );
};

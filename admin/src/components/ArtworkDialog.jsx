import { useParams } from "react-router-dom";
import { Dialog } from "./elements/Dialog";
import { GalleryProvider } from "./GalleryContext";
import { ArtworkForm } from "./ArtworkForm";

export const ArtworkDialog = () => {
  const { slug } = useParams();
  return (
    <GalleryProvider>
      <Dialog>
        <ArtworkForm slug={slug} />
      </Dialog>
    </GalleryProvider>
  );
};

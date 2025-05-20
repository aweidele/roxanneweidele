import { useParams } from "react-router-dom";
import { Dialog } from "./elements/Dialog";
import { GalleryProvider } from "./GalleryContext";
import { ArtworkForm } from "./ArtworkForm";
import { useRef, useEffect } from "react";
import { useApi } from "../functions/useApi";

export const ArtworkDialog = () => {
  const { slug } = useParams();
  const dialogRef = useRef(null);
  const { data, loading, error, request } = useApi();

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [slug]);

  const handleCloseButton = () => {
    dialogRef.current?.close();
  };

  return (
    <GalleryProvider>
      <Dialog ref={dialogRef} handleCloseButton={handleCloseButton}>
        <ArtworkForm slug={slug} />
      </Dialog>
    </GalleryProvider>
  );
};

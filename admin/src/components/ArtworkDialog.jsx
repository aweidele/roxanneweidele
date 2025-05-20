import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "./elements/Dialog";
import { GalleryProvider } from "./GalleryContext";
import { ArtworkForm } from "./ArtworkForm";
import { useRef, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";
import { useApi } from "../functions/useApi";

export const ArtworkDialog = () => {
  const { slug } = useParams();
  const { token } = useAppContext();
  const dialogRef = useRef(null);
  const { data, loading, error, request } = useApi();
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
    setIsClosing(false);
  }, [slug]);

  const handleCloseButton = () => {
    setIsClosing(true);
    setTimeout(() => {
      dialogRef.current?.close();
      navigate("/");
    }, 500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const submitValues = { ...values, sold: values.sold && values.sold === "on" ? 1 : 0 };

    console.log(submitValues);
    const result = await request(`artwork/${values.id}/edit`, "PUT", submitValues, token);
    if (result.success) {
      setIsClosing(true);
      setTimeout(() => {
        dialogRef.current?.close();
        navigate("/");
      }, 500);
    }
  };

  return (
    <GalleryProvider>
      <Dialog ref={dialogRef} handleCloseButton={handleCloseButton} extraClasses={isClosing ? "opacity-0" : ""}>
        <ArtworkForm slug={slug} onSubmit={handleSubmit} />
      </Dialog>
    </GalleryProvider>
  );
};

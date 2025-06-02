import { ImageUploadCard } from "./ImageUploadCard";
import { useGalleryContext } from "../GalleryContext";

export const ImageUploads = () => {
  const { gallery } = useGalleryContext();

  return (
    <>
      <h2>Uploaded Images</h2>
      {gallery
        .filter((item) => item.new)
        .map((file) => (
          <ImageUploadCard file={file} key={file.uniqid} />
        ))}
    </>
  );
};

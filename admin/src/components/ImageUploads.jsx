import { ImageUploadCard } from "./ImageUploadCard";
import { useGalleryContext } from "./GalleryContext";

export const ImageUploads = () => {
  const { files } = useGalleryContext();

  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <ImageUploadCard file={file} key={file.uniqid} />
      ))}
    </>
  );
};

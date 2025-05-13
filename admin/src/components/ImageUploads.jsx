import { ImageUploadCard } from "./ImageUploadCard";
import { useNewImageContext } from "./NewImageContext";

export const ImageUploads = () => {
  const { files } = useNewImageContext();

  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <ImageUploadCard file={file} key={file.uniqid} />
      ))}
    </>
  );
};

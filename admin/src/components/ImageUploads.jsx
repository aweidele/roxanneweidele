import { ImageUploadCard } from "./ImageUploadCard";
import { useNewImageContext } from "./NewImageContext";

/* BUG: Form fields are being cleared when new <ImageForm> is added */
export const ImageUploads = () => {
  const { files } = useNewImageContext();

  console.log("ImageUploads");
  // console.log(files);

  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <ImageUploadCard file={file} key={`${file.name}-${Math.random()}`} />
      ))}
    </>
  );
};

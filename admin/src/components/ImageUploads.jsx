import { ImageForm } from "./ImageForm";
import { useNewImageContext } from "./NewImageContext";

export const ImageUploads = () => {
  const { files } = useNewImageContext();
  console.log(files);
  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <div key={`${file.name}-${Math.random()}`} className="w-full my-2 p-2 border border-rose-quartz flex gap-2">
          <div className="w-50 aspect-[533/300] shrink-0">
            <img src={file.loading ? file.preview : file.urls.thumb.jpg} alt={file.name} className={`w-full h-full object-cover ${file.loading ? " opacity-50" : ""} transition-all duration-500`} />
          </div>
          {!file.loading ? <ImageForm /> : <div className="w-full h-full flex justify-center items-center">Uploading</div>}
        </div>
      ))}
    </>
  );
};

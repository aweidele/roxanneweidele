import { useState } from "react";
import { ImageForm } from "./ImageForm";
export const ImageUploadCard = ({ file }) => {
  const [submitting, setSubmitting] = useState({});
  const handleDoneSubmit = () => {
    setSubmitting({ transformX: "50%" });
  };

  return (
    <div className="w-full mt-2 mb-9 p-4 border border-rose-quartz flex gap-2 transition-all duration-300" style={submitting}>
      <div className="w-50 aspect-[533/300] shrink-0">
        <img src={file.loading ? file.preview : file.urls.thumb.jpg} alt={file.name} className={`w-full h-full object-cover ${file.loading ? " opacity-50" : ""} transition-all duration-500`} />
      </div>
      <div className="grow-1">{!file.loading ? <ImageForm artwork={file} submitAction={handleDoneSubmit} /> : <div className="w-full h-full flex justify-center items-center">Uploading</div>}</div>
    </div>
  );
};

import { useState } from "react";
import { ImageForm } from "./ImageForm";
import { useNewImageContext } from "./NewImageContext";
import { useApi } from "../functions/useApi";
import { useAppContext } from "./AppContext";

export const ImageUploadCard = ({ file }) => {
  const { files, setFiles } = useNewImageContext();
  const { data, loading, error, request } = useApi();

  const { token } = useAppContext();

  const [submitting, setSubmitting] = useState({});
  const handleDoneSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const submitValues = { ...values, sold: values.sold && values.sold === "on" ? 1 : 0, published: 1 };

    await request(`artwork/${file.id}/edit`, "PUT", submitValues, token);

    const index = files.findIndex((item) => item.uniqid === file.uniqid);

    setFiles({ type: "update_artwork", index, data: submitValues });
  };

  const thumbnail = () => {
    if (file.loading) return file.preview;
    const thumb = file.files.find((item) => item.size_key === "thumb");
    return thumb.url;
  };

  return (
    <div className="w-full mt-2 mb-9 p-4 border border-rose-quartz flex gap-2 transition-all duration-300" style={submitting}>
      <div className="w-50 aspect-[533/300] shrink-0">
        <img src={thumbnail()} alt={file.name} className={`w-full h-full object-cover ${file.loading ? " opacity-50" : ""} transition-all duration-500`} />
      </div>
      <div className="grow-1">{!file.loading ? <ImageForm artwork={file} submitAction={handleDoneSubmit} /> : <div className="w-full h-full flex justify-center items-center">Uploading</div>}</div>
    </div>
  );
};

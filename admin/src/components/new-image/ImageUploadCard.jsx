import { useRef, useState } from "react";
import { ImageForm } from "./ImageForm";
import { useGalleryContext } from "../GalleryContext";
import { useApi, imageURL } from "@shared";
import { useAppContext } from "../AppContext";

export const ImageUploadCard = ({ file }) => {
  const { gallery, setGallery } = useGalleryContext();
  const { data, loading, error, request } = useApi();
  const cardRef = useRef(null);

  const { token } = useAppContext();

  const [transitionStyle, setTransitionStyle] = useState({});

  const handleDoneSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const submitValues = { ...values, sold: values.sold && values.sold === "on" ? 1 : 0, published: 1, new: false };

    const index = gallery.findIndex((item) => item.uniqid === file.uniqid);

    const result = await request(`artwork/${file.id}/edit`, "PUT", submitValues, token);
    if (result.success) {
      const cardHeight = cardRef.current.offsetHeight;
      const computedStyle = window.getComputedStyle(cardRef.current);
      const marginTopValue = parseFloat(computedStyle.marginTop);

      setTransitionStyle({ marginBottom: `-${cardHeight + marginTopValue}px`, opacity: 0, transform: "translateX(50%)" });
      setTimeout(() => {
        setGallery({ type: "update_new_artwork", index, data: submitValues });
      }, 400);
    }
  };

  const thumbnail = () => {
    if (file.loading) return file.preview;
    return imageURL(file.files.thumb);
  };

  return (
    <div ref={cardRef} className="w-full mt-2 mb-9 p-4 border border-rose-quartz flex gap-2 transition-all duration-300" style={transitionStyle}>
      <div className="w-50  shrink-0">
        <div className="aspect-[533/300]">
          <img src={thumbnail()} alt={file.name} className={`w-full h-full object-cover ${file.loading ? " opacity-50" : ""} transition-all duration-500`} />
        </div>
        <p className="text-xs">{file.path}</p>
      </div>
      <div className="grow-1">{!file.loading ? <ImageForm artwork={file} submitAction={handleDoneSubmit} /> : <div className="w-full h-full flex justify-center items-center">Uploading</div>}</div>
    </div>
  );
};

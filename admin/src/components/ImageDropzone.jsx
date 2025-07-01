import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { useGalleryContext } from "./GalleryContext";
import { IconDragAndDrop } from "./elements/Icons";

export const ImageDropzone = ({ onDrop, multiple = true }) => {
  const { gallery, newArtwork } = useGalleryContext();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: multiple,
  });

  useEffect(() => {
    return () => {
      gallery.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [gallery]);

  return (
    <div {...getRootProps()} className={`aspect-[5/3] bg-white p-5 flex items-center justify-center border-2 border-dashed rounded-xl w-full max-w-md m-auto text-center cursor-pointer transition ${isDragActive ? "border-china-rose bg-rose-quartz" : "border-gray-300"} ${!!newArtwork.length && "text-sm"}`}>
      <input {...getInputProps()} />
      <div>
        <p>Drag and drop images here to add a new gallery item.</p>
        <IconDragAndDrop className={`fill-cordovan ${!newArtwork.length ? "w-15 h-15" : "w-12 h-12"} block mx-auto mt-6 transition-all duration-300`} />
      </div>
    </div>
  );
};

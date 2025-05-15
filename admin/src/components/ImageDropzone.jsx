import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";
import { useGalleryContext } from "./GalleryContext";
import { uniqid } from "../functions/functions";
import { IconDragAndDrop } from "./elements/Icons";

export const ImageDropzone = () => {
  const { token } = useAppContext();
  const { gallery, setGallery, newArtwork } = useGalleryContext();

  const addNewArt = async (args, index) => {
    try {
      const response = await fetch(`${apiURL}artwork/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...args, published: 0 }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }

      const result = await response.json();
      setGallery({ type: "update_new_artwork", index, data: result.data });
    } catch (err) {
      console.error("Error adding new artwork", err.message);
    }
  };

  const uploadFile = async (file, index) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${apiURL}upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Upload failed");
      setGallery({ type: "update_file", index, result });

      const parentMedia = result.find((item) => item.media === item.id || item.media === null);
      addNewArt({ media: parentMedia.id }, index);
    } catch (err) {
      console.error("Upload Error", err.message);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const imageFiles = acceptedFiles.map((file, index) => {
        uploadFile(file, index);
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
          loading: true,
          uniqid: uniqid(),
          new: true,
        });
        setGallery({ type: "add_file", newFile: newFile });
        return newFile;
      });
    },
    [token]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

  useEffect(() => {
    return () => {
      gallery.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [gallery]);

  return (
    <div {...getRootProps()} className={`aspect-[5/3] p-5 flex items-center justify-center border-2 border-dashed rounded-xl w-full max-w-md m-auto text-center cursor-pointer transition ${isDragActive ? "border-china-rose bg-rose-quartz" : "border-gray-300"} ${!!newArtwork.length && "text-sm"}`}>
      <input {...getInputProps()} />
      <div>
        <p>Drag and drop images here to add a new gallery item.</p>
        <IconDragAndDrop className={`fill-cordovan ${!newArtwork.length ? "w-15 h-15" : "w-12 h-12"} block mx-auto mt-6 transition-all duration-300`} />
      </div>
    </div>
  );
};

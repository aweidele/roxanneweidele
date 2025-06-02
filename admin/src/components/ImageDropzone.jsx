import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { useAppContext } from "./AppContext";
import { useUpload } from "../functions/useUpload";
import { apiURL } from "../functions/vars";
import { useGalleryContext } from "./GalleryContext";
import { uniqid, sortFiles } from "../functions/functions";
import { IconDragAndDrop } from "./elements/Icons";

export const ImageDropzone = () => {
  const { token } = useAppContext();
  const { gallery, setGallery, newArtwork } = useGalleryContext();
  const { uploadFile, uploading, uploadError, uploadResult } = useUpload();

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

  const handleUploadFile = async (file, index) => {
    const result = await uploadFile(file, token);
    console.log("handleUploadFile:", result);
    const files = sortFiles(result);
    setGallery({ type: "update_file", index, files });
    const parentMedia = result.find((item) => item.media === item.id || item.media === null);
    addNewArt({ media: parentMedia.id }, index);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const imageFiles = acceptedFiles.map((file, index) => {
        handleUploadFile(file, index);
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

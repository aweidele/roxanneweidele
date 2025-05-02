import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Section } from "./Section";

import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";

export const ImageDropzone = ({ files, setFiles, setHasUploads }) => {
  const { token } = useAppContext();

  const uploadFile = async (file) => {
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
      console.log("success", result);
    } catch (err) {
      console.error("Upload Error", err.message);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setHasUploads(true);
      const imageFiles = acceptedFiles.map((file) => {
        uploadFile(file);
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      console.log(imageFiles);
      setFiles((prev) => [...imageFiles, ...prev]);
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
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div {...getRootProps()} className={`flex items-center justify-center border-2 border-dashed rounded-xl aspect-[4/3] w-full max-w-md m-auto text-center cursor-pointer transition ${isDragActive ? "border-china-rose bg-rose-quartz" : "border-gray-300"}`}>
      <input {...getInputProps()} />
      <div>Drop images here to upload</div>
    </div>
  );
};

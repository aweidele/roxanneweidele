import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";
import { useNewImageContext } from "./NewImageContext";

export const ImageDropzone = () => {
  const { token } = useAppContext();
  const { files, setFiles, setHasUploads } = useNewImageContext();

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
      console.log("success", result);
      setFiles((prev) => {
        const updated = [...prev];
        updated[index] = { ...result, loading: false };
        return updated;
      });
    } catch (err) {
      console.error("Upload Error", err.message);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setHasUploads(true);
      const imageFiles = acceptedFiles.map((file, index) => {
        uploadFile(file, index);
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          loading: true,
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

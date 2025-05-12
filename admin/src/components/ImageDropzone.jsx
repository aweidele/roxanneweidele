import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";
import { useNewImageContext } from "./NewImageContext";
import { uniqid } from "../functions/functions";

export const ImageDropzone = () => {
  const { token } = useAppContext();
  const { files, setFiles } = useNewImageContext();

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
      setFiles({ type: "update_file", index, result });
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
        });
        setFiles({ type: "add_file", newFile: newFile });
        return newFile;
      });
      console.log("onDrop");
      console.log(imageFiles);
      // setFiles({ type: "add_file", newFile: imageFiles });
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

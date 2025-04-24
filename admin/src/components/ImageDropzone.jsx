import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const ImageDropzone = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    const imageFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    console.log(imageFiles);
    setFiles((prev) => [...imageFiles, ...prev]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });
  return (
    <>
      <div {...getRootProps()} className={`sticky top-18 bg-white border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"}`}>
        <input {...getInputProps()} />
        Image dropzone here!!
      </div>
      <div className="my-5">
        <h4 className="text-bold">Uploaded Files</h4>
        {files.map((file) => (
          <div className="w-100">
            <img key={file.name} src={file.preview} alt={file.name} className="w-full rounded" />
          </div>
        ))}
      </div>
    </>
  );
};

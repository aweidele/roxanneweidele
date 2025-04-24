import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Section } from "./Section";

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
      <Section className="sticky top-18">
        <div {...getRootProps()} className={`flex items-center justify-center border-2 border-dashed rounded-xl aspect-[4/3] max-w-md m-auto text-center cursor-pointer transition ${isDragActive ? "border-china-rose bg-rose-quartz" : "border-gray-300"}`}>
          <input {...getInputProps()} />
          <div>Drop images here to upload</div>
        </div>
      </Section>
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

export const ImageUploads = ({ files, setFiles }) => {
  console.log(files);
  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <div className="w-100" key={`${file.name}-${Math.random()}`}>
          <img src={file.preview} alt={file.name} className="w-full rounded" />
        </div>
      ))}
    </>
  );
};

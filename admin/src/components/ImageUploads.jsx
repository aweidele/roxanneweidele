export const ImageUploads = ({ files, setFiles }) => {
  console.log(files);
  return (
    <>
      <h2>Uploaded Images</h2>
      {files.map((file) => (
        <div key={`${file.name}-${Math.random()}`} className="w-full my-2 p-2 border border-rose-quartz">
          <div className="w-50 aspect-[533/300] shrink-0">
            <img src={file.loading ? file.preview : file.urls.thumb.jpg} alt={file.name} className={`w-full h-full object-cover${file.loading ? " opacity-50" : ""} transition-all duration-500`} />
          </div>
        </div>
      ))}
    </>
  );
};

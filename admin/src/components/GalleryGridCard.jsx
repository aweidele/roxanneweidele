export const GalleryGridCard = ({ item }) => {
  console.log("Item", item);
  return (
    <div>
      <div className="aspect-5/4 bg-gray-800 p-1">
        <img src={item.files.lg.url} className="w-full h-full object-contain" />
      </div>
      <div className="p-1">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export const GalleryGridCard = ({ item, active }) => {
  console.log("Item", item);
  return (
    <div className={!active ? "sr-only" : null}>
      <div className="aspect-5/4 bg-gray-800 p-1">
        <img src={item.files.lg.url} className="w-full h-full object-contain" />
      </div>
      <div className="p-1">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

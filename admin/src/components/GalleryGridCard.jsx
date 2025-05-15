export const GalleryGridCard = ({ item }) => {
  return (
    <div key={item.slug}>
      <div className="aspect-square bg-gray-800 p-1">
        <img src={item.files.lg.url} className="w-full h-full object-contain" />
      </div>
      <div className="p-1">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

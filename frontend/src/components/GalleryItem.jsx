import { NavLink } from "react-router-dom";

export const GalleryItem = ({ item, index }) => {
  console.log("GalleryItem", item);
  return (
    <NavLink to={`/artwork/${item.slug}`} className="absolute w-full h-full top-0 left-0 z-50 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 hover:bg-rose-quartz-70">
      <div className="p-4 text-lg">{item.title}</div>
    </NavLink>
  );
};

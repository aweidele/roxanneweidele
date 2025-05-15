import { GalleryGridCard } from "./GalleryGridCard";

export const GalleryGrid = ({ content }) => {
  console.log(content);
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-5">
      {content.map((item) => (
        <GalleryGridCard item={item} />
      ))}
    </div>
  );
};

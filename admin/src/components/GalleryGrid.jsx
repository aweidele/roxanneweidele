import { GalleryGridCard } from "./GalleryGridCard";

export const GalleryGrid = ({ content }) => {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-5">
      {content.map((item) => (
        <GalleryGridCard key={item.slug} item={item} />
      ))}
    </div>
  );
};

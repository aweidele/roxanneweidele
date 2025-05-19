import { act, useState } from "react";
import { Button } from "./elements/Button";
import { GalleryGridCard } from "./GalleryGridCard";

const medium = [
  { name: "All", id: "all" },
  { name: "Pastels", id: "pastels" },
  { name: "Oils", id: "oils" },
];

export const GalleryGrid = ({ content }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <>
      <div className="inline-grid grid-cols-3 gap-1 mb-2">
        {medium.map((item) => (
          <Button color={activeFilter === item.id ? "bg-uranian-blue-800 hover:bg-uranian-blue text-black" : false} onClick={() => setActiveFilter(item.id)}>
            {item.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-5">
        {content.map((item) => (
          <GalleryGridCard key={item.slug} item={item} active={item.medium === activeFilter || activeFilter === "all"} />
        ))}
      </div>
    </>
  );
};

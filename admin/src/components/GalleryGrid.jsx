import { useState } from "react";
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
      <div className="inline-grid grid-cols-4 gap-1 mb-4 items-center">
        <h3>Filter: </h3>
        {medium.map((item) => (
          <Button key={item.id} color={activeFilter === item.id ? "bg-uranian-blue-800 hover:bg-uranian-blue text-black" : false} onClick={() => setActiveFilter(item.id)}>
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

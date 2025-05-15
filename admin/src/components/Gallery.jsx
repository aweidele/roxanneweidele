import { Section } from "./Section";
import { useGalleryContext } from "./GalleryContext";
import { GalleryGrid } from "./GalleryGrid";
import { useState } from "react";

export const Gallery = () => {
  const { gallery } = useGalleryContext();
  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);

  const [leftColumn, setLeftColumn] = useState(published);
  const [rightColumn, setRightColumn] = useState(`${unpublished.length} Unpublished items`);

  return (
    <Section>
      <h2 className="mb-8">Gallery Grid</h2>
      <div className="flex gap-5">
        <div className="flex-3/4">
          <GalleryGrid content={leftColumn} />
        </div>
        <div className="flex-1/4">{rightColumn}</div>
      </div>
    </Section>
  );
};

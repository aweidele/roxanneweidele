import { Section } from "./Section";
import { useGalleryContext } from "./GalleryContext";
import { GalleryGrid } from "./GalleryGrid";
import { useState } from "react";
import { IconUnpublished } from "./elements/Icons";
import { Button } from "@shared/components/Button";

export const Gallery = () => {
  const { gallery } = useGalleryContext();
  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);

  const [leftColumn, setLeftColumn] = useState(published);

  return (
    <Section>
      <h2 className="mb-8">Gallery Grid</h2>
      <div className="flex gap-15">
        <div className="flex-3/4">
          <GalleryGrid content={leftColumn} />
        </div>
        <div className="flex-1/4">
          <div className="sticky top-0">
            <h3 className="mb-4 leading-[2.5rem]">Unpublished Items ({unpublished.length})</h3>
            <div className="aspect-5/4 border-2 border-dashed rounded-xl border-gray-300 flex flex-col justify-center items-center text-center p-10">
              <IconUnpublished className="fill-cordovan w-18 h-18 block mx-auto mt-6 transition-300" />
              <p>Drag images from the gallery to set to unpublished</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

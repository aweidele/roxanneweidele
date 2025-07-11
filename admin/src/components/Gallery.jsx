import { Section } from "./Section";
import { useGalleryContext } from "./GalleryContext";
import { GalleryGrid } from "./GalleryGrid";
import { useState } from "react";
import { IconUnpublished, IconPublished } from "./elements/Icons";
import { Button } from "@shared/components/Button";

export const Gallery = () => {
  const { gallery } = useGalleryContext();
  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);

  const [viewingPublished, setViewingPublished] = useState(true);

  const Icon = viewingPublished ? IconUnpublished : IconPublished;

  const handleToggleView = () => {
    setViewingPublished(!viewingPublished);
  };

  return (
    <Section>
      <h2 className="mb-8">Gallery Grid</h2>
      <div className="flex gap-15">
        <div className="flex-3/4">
          <GalleryGrid content={viewingPublished ? published : unpublished} />
        </div>
        <div className="flex-1/4">
          <div className="sticky top-0">
            <h3 className="mb-4 leading-[2.5rem]">
              {viewingPublished ? "Unpublished" : "Published"} Items ({viewingPublished ? unpublished.length : published.length})
            </h3>
            <div className={`aspect-5/4 border-2 border-dashed rounded-xl ${viewingPublished ? "border-cordovan" : "border-sage"} flex flex-col justify-center items-center text-center p-10`}>
              <Icon className={`${viewingPublished ? "fill-cordovan" : "fill-sage"} w-18 h-18 block mx-auto mt-6 transition-300`} />
              <p>
                Drag images from the gallery to set to <strong>{viewingPublished ? "unpublished" : "published"}</strong>
              </p>
            </div>
            <div className="text-center py-5">
              <Button color={viewingPublished ? "bg-cordovan hover:bg-cordovan-800 text-white" : "bg-sage hover:bg-sage-200 text-uranian-blue-1000"} onClick={handleToggleView}>
                Open {viewingPublished ? "Unpublished" : "Published"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

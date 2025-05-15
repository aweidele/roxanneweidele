import { Section } from "./Section";
import { useGalleryContext } from "./GalleryContext";
import { GalleryGrid } from "./GalleryGrid";

export const Gallery = () => {
  const { gallery } = useGalleryContext();

  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);
  // console.log("GalleryGrid");
  // console.log(published);
  // console.log(unpublished);
  return (
    <Section>
      <h2>Gallery Grid</h2>
      <div className="flex gap-5">
        <div className="flex-3/4 border">
          <GalleryGrid />
        </div>
        <div className="flex-1/4 border">{unpublished.length} Unpublished items</div>
      </div>
    </Section>
  );
};

import { useLoaderData } from "react-router-dom";
import { Section } from "./Section";

export const Gallery = () => {
  const { gallery } = useLoaderData();
  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);
  console.log("GalleryGrid");
  console.log(published);
  console.log(unpublished);
  return (
    <Section>
      <h2>Gallery Grid</h2>
      <div className="flex gap-5">
        <div className="flex-3/4 border">Gallery.</div>
        <div className="flex-1/4 border">{unpublished.length} Unpublished items</div>
      </div>
    </Section>
  );
};

import { ImageDropzone } from "./ImageDropzone";
import { Section } from "./Section";
import { ImageUploads } from "./ImageUploads";
import { useGalleryContext } from "./GalleryContext";

export const NewImage = () => {
  const { files } = useGalleryContext();
  return (
    <div>
      <Section>
        <div className="flex gap-5">
          <div className={`${files.length ? "w-1/5" : "w-full"} transition-all duration-500`}>
            <ImageDropzone />
          </div>
          {files.length > 0 && (
            <div className="grow-1">
              <ImageUploads />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

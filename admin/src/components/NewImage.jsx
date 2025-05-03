import { ImageDropzone } from "./ImageDropzone";
import { Section } from "./Section";
import { ImageUploads } from "./ImageUploads";
import { useNewImageContext } from "./NewImageContext";

export const NewImage = () => {
  const { files, hasUploads } = useNewImageContext();
  console.log(files);
  return (
    <div>
      <Section>
        <div className="flex gap-5">
          <div className={`${hasUploads ? "w-1/5" : "w-full"} transition-all duration-500`}>
            <ImageDropzone />
          </div>
          {hasUploads && (
            <div className="grow-1">
              <ImageUploads />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

import { useState } from "react";
import { ImageDropzone } from "./ImageDropzone";
import { Section } from "./Section";
import { ImageUploads } from "./ImageUploads";

export const NewImage = () => {
  const [hasUploads, setHasUploads] = useState(false);
  const [files, setFiles] = useState([]);
  return (
    <div>
      <Section>
        <div class="flex gap-5 ">
          <div className={`${hasUploads ? "w-1/5" : "w-full"} transition-all duration-500`}>
            <ImageDropzone files={files} setFiles={setFiles} setHasUploads={setHasUploads} />
          </div>
          {hasUploads && (
            <div>
              <ImageUploads files={files} setFiles={setFiles} />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

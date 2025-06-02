import { ImageDropzone } from "../ImageDropzone";
import { Section } from "../Section";
import { ImageUploads } from "./ImageUploads";
import { useGalleryContext } from "../GalleryContext";
import { useAppContext } from "../AppContext";
import { useUpload } from "../../functions/useUpload";
import { useApi } from "../../functions/useApi";
import { useCallback } from "react";
import { uniqid, sortFiles } from "../../functions/functions";

export const NewImage = () => {
  const { token } = useAppContext();
  const { gallery, setGallery, newArtwork } = useGalleryContext();
  const { uploadFile, uploading, uploadError, uploadResult } = useUpload();
  const { data, loading, error, request } = useApi();

  const addNewArt = async (args, index) => {
    const result = await request(`artwork/add`, "POST", { ...args, published: 0 }, token);
    setGallery({ type: "update_new_artwork", index, data: result.data });
  };

  const handleUploadFile = async (file, index) => {
    const result = await uploadFile(file, token);
    const files = sortFiles(result);
    setGallery({ type: "update_file", index, files });
    const parentMedia = result.find((item) => item.media === item.id || item.media === null);
    addNewArt({ media: parentMedia.id }, index);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const imageFiles = acceptedFiles.map((file, index) => {
        handleUploadFile(file, index);
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
          loading: true,
          uniqid: uniqid(),
          new: true,
        });
        setGallery({ type: "add_file", newFile: newFile });
        return newFile;
      });
    },
    [token]
  );

  return (
    <div>
      <Section>
        <div className="flex gap-5">
          <div className={`${newArtwork.length ? "w-1/5" : "w-full"} transition-all duration-500`}>
            <ImageDropzone onDrop={onDrop} />
          </div>
          {newArtwork.length > 0 && (
            <div className="grow-1">
              <ImageUploads />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

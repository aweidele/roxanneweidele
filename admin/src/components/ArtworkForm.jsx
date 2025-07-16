import { Input } from "./elements/Input";
import { Select } from "./elements/Select";
import { Toggle } from "./elements/Toggle";
import { Button, imageURL, sortFiles, useUpload } from "@shared";
import { useGalleryContext } from "./GalleryContext";
import { useEffect, useState, useCallback } from "react";
import { IconImage } from "./elements/Icons";
import { ImageDropzone } from "./ImageDropzone";
import { useAppContext } from "./AppContext";
import { slugify } from "@shared/functions/functions";

const isSlug = (slug) => !/^\d+$/.test(slug);

export const ArtworkForm = ({ slug, ...props }) => {
  const { gallery, setGallery } = useGalleryContext();
  const [isEditImage, setIsEditImage] = useState(true);
  const [artwork, setArtwork] = useState(null);
  const index = artwork ? gallery.findIndex((item) => (isSlug(slug) ? item.slug === slug : item.id === parseInt(slug))) : null;
  const [currentMedia, setCurrentMedia] = useState(null);
  const { uploadFile } = useUpload();

  const { token } = useAppContext();

  useEffect(() => {
    let current;
    if (/^\d+$/.test(slug)) {
      current = gallery.find((item) => item.id === parseInt(slug));
    } else {
      current = gallery.find((item) => item.slug === slug);
    }

    setArtwork(current);
    setIsEditImage(false);

    setCurrentMedia(current.media);
  }, [slug]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const result = await uploadFile(acceptedFiles[0], token);
        const files = sortFiles(result);
        setCurrentMedia(files.original.id);
        setGallery({ type: "update_file", index, files });
        setIsEditImage(false);
      }
    },
    [token]
  );

  const handleTitleChange = (e) => {
    setArtwork((prev) => ({ ...prev, slug: slugify(e.target.value) }));
  };

  return (
    <>
      {artwork && (
        <form className="p-4" key={slug} {...props}>
          <input type="hidden" name="id" value={artwork.id} />
          <input type="hidden" name="media" value={currentMedia} />
          <input type="hidden" name="slug" value={artwork.slug} />
          <h2 className="mb-2">Edit Artwork</h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                {isEditImage ? (
                  <div className="absolute w-full h-full z-10 p-2 flex flex-col justify-between bg-[rgba(255,255,255,0.5)]">
                    <div className="opacity-80">
                      <ImageDropzone onDrop={onDrop} />
                    </div>
                    <Button type="button" color="bg-uranian-blue-800 hover:bg-uranian-blue text-black" className="shadow-[0 0 3px rgba(0,0,0,0.75)]" onClick={() => setIsEditImage(false)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <button type="button" className="absolute w-full h-full z-10 p-2 flex items-end justify-end hover:bg-[rgba(0,0,0,0.5)]" onClick={() => setIsEditImage(true)}>
                    <span className="bg-uranian-blue-800 px-4 py-2 text-xs text-center rounded-lg uppercase tracking-wide">
                      <span>Replace image</span>
                      <IconImage className="fill-current w-10 h-10 mx-auto mt-2" />
                    </span>
                  </button>
                )}
                <img src={imageURL(artwork.files.thumb)} className="relative z-0 w-full" />
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Input name="title" label="Title" required={true} defaultValue={artwork.title} onChange={handleTitleChange} />
                </div>
                <div>
                  <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" defaultValue={artwork.width} step="any" />
                </div>
                <div>
                  <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" defaultValue={artwork.height} step="any" />
                </div>
                <div className="col-span-2">
                  <Select label="Medium" name="medium" defaultValue={artwork.medium}>
                    <option value="pastels">Pastels</option>
                    <option value="oils">Oils</option>
                  </Select>
                </div>
                <div>
                  <Toggle label="Sold" name="sold" checked={artwork.sold} />
                </div>
                <div className="col-span-2 text-center">
                  <Button>Sumbit</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

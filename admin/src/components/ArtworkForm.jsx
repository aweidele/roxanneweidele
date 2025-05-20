import { Input } from "./elements/Input";
import { Select } from "./elements/Select";
import { Toggle } from "./elements/Toggle";
import { Button } from "./elements/Button";
import { useGalleryContext } from "./GalleryContext";
import { useEffect, useState } from "react";
import { IconImage } from "./elements/Icons";

export const ArtworkForm = ({ slug, ...props }) => {
  const { gallery } = useGalleryContext();
  const [isEditImage, setIsEditImage] = useState(true);
  const artwork = gallery.find((item) => item.slug === slug);
  const [currentMedia, setCurrentMedia] = useState(artwork.media);

  useEffect(() => {
    setIsEditImage(false);
    setCurrentMedia(artwork.media);
  }, [slug]);

  console.log("ArtworkForm");
  console.log(artwork);
  return (
    <form className="p-4" key={slug} {...props}>
      <input type="hidden" name="id" value={artwork.id} />
      <input type="hidden" name="media" value={currentMedia} />
      <h2 className="mb-2">Edit Artwork</h2>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            {isEditImage ? (
              <div className="absolute w-full h-full z-10 p-2 flex flex-col justify-between bg-[rgba(255,255,255,0.5)]">
                <div>Drop image here</div>
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
            <img src={artwork.files.thumb.url} className="relative z-0 w-full" />
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Input name="title" label="Title" required={true} defaultValue={artwork.title} />
            </div>
            <div>
              <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" defaultValue={artwork.width} step="any" />
            </div>
            <div>
              <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" defaultValue={artwork.height} step="any" />
            </div>
            <div className="col-span-2">
              <Select label="Medium" name="medium" defaultValue={artwork.medium}>
                <option value="pastels" selected={artwork.medium === "pastels"}>
                  Pastels
                </option>
                <option value="oils" selected={artwork.medium === "oils"}>
                  Oils
                </option>
              </Select>
            </div>
            <div>
              <Input type="number" name="price" label="Price" defaultValue={artwork.price} step="any" />
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
  );
};

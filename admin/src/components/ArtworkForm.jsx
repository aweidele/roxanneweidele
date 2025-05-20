import { Input } from "./elements/Input";
import { Select } from "./elements/Select";
import { Toggle } from "./elements/Toggle";
import { Button } from "./elements/Button";
import { useGalleryContext } from "./GalleryContext";

export const ArtworkForm = ({ slug }) => {
  const { gallery } = useGalleryContext();
  const artwork = gallery.find((item) => item.slug === slug);
  return (
    <form className="p-4">
      <div className="flex">
        <div className="flex-1">image</div>
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
            <div>
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
            <div>
              <Button>Publish</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

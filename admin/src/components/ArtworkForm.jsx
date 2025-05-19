import { Input } from "./elements/Input";
import { Select } from "./elements/Select";
import { Toggle } from "./elements/Toggle";
import { Button } from "./elements/Button";
import { useGalleryContext } from "./GalleryContext";

export const ArtworkForm = ({ slug }) => {
  const { gallery } = useGalleryContext();
  const artwork = gallery.find((item) => item.slug === slug);
  console.log("ArtworkForm");
  console.log(artwork);
  return (
    <form className="p-4">
      <Input name="title" label="Title" required={true} defaultValue={artwork.title} />
      <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" defaultValue={artwork.width} step="any" />
      <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" defaultValue={artwork.height} step="any" />
      <Select label="Medium" name="medium" defaultValue={artwork.medium}>
        <option value="pastels" selected={artwork.medium === "pastels"}>
          Pastels
        </option>
        <option value="oils" selected={artwork.medium === "oils"}>
          Oils
        </option>
      </Select>
      <Input type="number" name="price" label="Price" defaultValue={artwork.price} step="any" />
      <Toggle label="Sold" name="sold" checked={artwork.sold} />
      <Button>Publish</Button>
    </form>
  );
};

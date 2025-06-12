import { useState } from "react";
import { Button } from "@shared";
import { Input } from "../elements/Input";
import { Toggle } from "../elements/Toggle";
import { Select } from "../elements/Select";

export const ImageForm = ({ artwork, submitAction }) => {
  const [slug, setSlug] = useState(artwork.slug);

  const handleTitleChange = (event) => {
    const newSlug = event.target.value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/-+/g, "-");
    setSlug(newSlug);
  };

  return (
    <form onSubmit={submitAction}>
      <div className="flex gap-6">
        <div className="flex-1">
          <Input name="title" label="Title" required={true} defaultValue={artwork.title} onChange={handleTitleChange} />
          <div className="flex gap-2">
            <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" defaultValue={artwork.width} step="any" />
            <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" defaultValue={artwork.height} step="any" />
            <Select label="Medium" name="medium" defaultValue={artwork.medium}>
              <option value="pastels">Pastels</option>
              <option value="oils">Oils</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <Input type="number" name="price" label="Price" defaultValue={artwork.price} step="any" />
          <div className="flex justify-between gap-2">
            <Toggle label="Sold" name="sold" checked={artwork.sold} />
            <input type="hidden" name="slug" value={slug} />
            <Button>Publish</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

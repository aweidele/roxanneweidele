import { useState } from "react";
import { Button } from "./elements/Button";
import { Input } from "./elements/Input";
import { Toggle } from "./elements/Toggle";
import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";
import { useNewImageContext } from "./NewImageContext";

export const ImageForm = ({ artwork, submitAction }) => {
  const { token } = useAppContext();
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

  // const editArtworkAction = async (prevFormState, formData) => {
  //   const sold = formData.get("sold") === "on" ? 1 : 0;
  //   const data = { ...Object.fromEntries(formData.entries()), sold, published: 1 };

  //   const response = await fetch(`${apiURL}artwork/${artworkId}/edit`, {
  //     method: "UPDATE",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const result = await response.json();
  //   if (!response.ok) throw new Error(result.error || "Upload failed");
  //   submitAction();
  //   return { errors: null };
  // };

  return (
    <form onSubmit={submitAction}>
      <div className="flex gap-6">
        <div className="flex-1">
          <Input name="title" label="Title" required={true} defaultValue={artwork.title} onChange={handleTitleChange} />
          <div className="flex gap-2">
            <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" defaultValue={artwork.width} step="any" />
            <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" defaultValue={artwork.height} step="any" />
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
      <p className="text-xs">
        <strong>slug:</strong> {slug}
      </p>
    </form>
  );
};

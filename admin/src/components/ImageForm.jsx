import { useActionState, useState } from "react";
import { Button } from "./elements/Button";
import { Input } from "./elements/Input";
import { Toggle } from "./elements/Toggle";
import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";

export const ImageForm = ({ artworkId }) => {
  const { token } = useAppContext();

  const [title, setTitle] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const editArtworkAction = async (prevFormState, formData) => {
    const sold = formData.get("sold") === "on" ? 1 : 0;
    const data = { ...Object.fromEntries(formData.entries()), sold, published: 1 };

    const response = await fetch(`${apiURL}artwork/${artworkId}/edit`, {
      method: "UPDATE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Upload failed");
    console.log("success", result);
    console.log(result.inputs);

    return { errors: null };
  };

  const [formState, formAction, pending] = useActionState(editArtworkAction, { errors: null });
  return (
    <form action={formAction}>
      <div className="flex gap-6">
        <div className="flex-1">
          <Input name="title" label="Title" required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
          <div className="flex gap-2">
            <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" value={width} onChange={(e) => setWidth(e.target.value)} />
            <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
        </div>
        <div className="flex-1">
          <Input type="textarea" name="description" label="Description" outerClass="flex flex-col h-full" innerClass="grow-1" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex flex-col justify-between">
          <Input type="number" name="price" label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <div className="flex justify-between gap-2">
            <Toggle label="Sold" name="sold" />
            <Button>Publish</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

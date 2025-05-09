import { useState } from "react";
import { Button } from "./elements/Button";
import { Input } from "./elements/Input";
import { Toggle } from "./elements/Toggle";
import { useAppContext } from "./AppContext";
import { apiURL } from "../functions/vars";

export const ImageForm = ({ artwork, submitAction }) => {
  const { token } = useAppContext();

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
    <form>
      <div className="flex gap-6">
        <div className="flex-1">
          <Input name="title" label="Title" required={true} />
          <div className="flex gap-2">
            <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" />
            <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" />
          </div>
        </div>
        <div className="flex-1">
          <Input type="textarea" name="description" label="Description" outerClass="flex flex-col h-full" innerClass="grow-1" />
        </div>
        <div className="flex flex-col justify-between">
          <Input type="number" name="price" label="Price" />
          <div className="flex justify-between gap-2">
            <Toggle label="Sold" name="sold" />
            <Button>Publish</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

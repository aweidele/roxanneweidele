import { Input } from "./elements/Input";
import { Toggle } from "./elements/Toggle";

export const ImageForm = ({ artworkId }) => {
  return (
    <form>
      <div className="flex gap-6">
        <div className="flex-1">
          <Input name="title" label="Title" required={true} outerClass="mb-1" />
          <div className="flex gap-2">
            <Input name="width" label="Width" type="number" required={true} outerClass="flex-1" />
            <Input name="height" label="Height" type="number" required={true} outerClass="flex-1" />
          </div>
        </div>
        <div className="flex-1">
          <Input type="textarea" name="description" label="Description" outerClass="flex flex-col h-full" innerClass="grow-1" />
        </div>
        <div>
          <Toggle label="Sold" name="sold" />
        </div>
      </div>
    </form>
  );
};

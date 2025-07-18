import { Button, useApi } from "@shared";
import { Input } from "./elements/Input";

export const ContactForm = () => {
  const { data, loading, error, request } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const result = await request(`contact`, "POST", values);
  };
  return (
    <>
      <p>{loading ? "loading" : "not loading"}</p>
      <p>{error ? "error" : "not error"}</p>
      <form className="grid gap-2.5 grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <Input label="Your Name" type="text" name="name" defaultValue="Aaron" />
        </div>
        <div>
          <Input label="Your Email" type="email" name="email" defaultValue="test@test.com" />
        </div>
        <div className="col-span-2">
          <Input label="Subject" type="text" name="subject" defaultValue="Test" />
        </div>
        <div className="col-span-2">
          <Input
            label="Message"
            type="textarea"
            name="message"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nibh, feugiat id ipsum eget, hendrerit iaculis nisl. Cras vel massa vehicula, ullamcorper ligula ac, interdum ex. Maecenas lacinia lobortis sollicitudin. Etiam feugiat nulla non lacus sagittis, a sodales nulla pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis lacinia mi ac vehicula aliquet. Aliquam blandit leo vel facilisis commodo. Mauris ut sodales augue. Duis imperdiet eros ac orci bibendum mattis vitae rutrum sapien. Morbi dictum, sem vel auctor lacinia, enim lacus gravida quam, non tempor ligula elit ut lectus. Phasellus sed pretium leo, et tristique sem."
          />
        </div>
        <div className="col-span-2 text-center">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
};

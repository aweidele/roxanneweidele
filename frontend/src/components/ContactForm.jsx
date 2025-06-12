import { Input } from "./elements/Input";

export const ContactForm = () => {
  return (
    <form className="grid gap-2.5 grid-cols-2">
      <div>
        <Input label="Your Name" type="text" name="name" />
      </div>
      <div>
        <Input label="Your Email" type="email" name="email" />
      </div>
      <div className="col-span-2">
        <Input label="Subject" type="text" name="subject" />
      </div>
      <div className="col-span-2">
        <Input label="Message" type="textarea" name="message" />
      </div>
    </form>
  );
};

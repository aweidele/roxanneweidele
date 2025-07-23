import { Button, useApi } from "@shared";
import { Input } from "./elements/Input";
import { useState } from "react";
import { ErrorIcon } from "./layout/Icons";

export const ContactForm = () => {
  const { data, loading, error, request } = useApi();
  const [formResult, setFormResult] = useState(false);
  console.log(formResult);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    const result = await request(`contact`, "POST", values);
    console.log(result);
    setFormResult(true);
  };
  return (
    <div className="relative">
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-white-overlay">
          <p className="font-bold">Sending Mail</p>
        </div>
      )}
      {formResult ? (
        <div>
          {error ? (
            <p className="text-center text-china-rose-800 font-bold sm:px-20 flex flex-col gap-2.5 items-center">
              <ErrorIcon className="w-10 h-10 fill-current" />
              <span>Hmm, something went wrong and I didn’t receive your message. Please try again—or feel free to email me directly.</span>
            </p>
          ) : (
            <p className="text-center text-lg my-20 sm:px-20">Thanks for reaching out! I look forward to reading your message and will be in touch soon.</p>
          )}
        </div>
      ) : (
        <form className="grid gap-2.5 grid-cols-2" onSubmit={handleSubmit}>
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
          <div className="col-span-2 text-center">
            <Button>Submit</Button>
          </div>
        </form>
      )}
    </div>
  );
};

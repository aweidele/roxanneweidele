import { Facebook, Instagram } from "../Icons";

export const Social = ({ handleClose }) => {
  return (
    <ul className="flex justify-center md:flex-col gap-3.5 justify-self-end">
      <li>
        <a href="https://www.facebook.com/roxanne.weidele.artist/" target="_blank" className="text-white hover:text-uranian-blue" onClick={handleClose}>
          <Facebook className="w-6.5 h-6.5 fill-current" />
          <span className="sr-only">Follow me on Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/roxanneweidele/" target="_blank" className="text-white hover:text-uranian-blue" onClick={handleClose}>
          <Instagram className="w-6.5 h-6.5 fill-current" />
          <span className="sr-only">Follow me on Instagram</span>
        </a>
      </li>
    </ul>
  );
};

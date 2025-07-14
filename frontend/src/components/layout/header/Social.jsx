import { Facebook, Instagram } from "../Icons";

export const Social = ({ handleClose, ...props }) => {
  return (
    <ul className="flex justify-center gap-3.5 justify-self-end md:flex-col md:h-full md:justify-center md:absolute md:top-0 md:right-0">
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

import { Facebook, Instagram } from "../Icons";

export const Social = () => {
  return (
    <ul className="flex md:flex-col gap-3.5">
      <li>
        <a href="https://www.facebook.com/roxanne.weidele.artist/" target="_blank">
          <Facebook className="w-6.5 h-6.5 fill-current" />
          <span className="sr-only">Follow me on Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/roxanneweidele/" target="_blank">
          <Instagram className="w-6.5 h-6.5 fill-current" />
          <span className="sr-only">Follow me on Instagram</span>
        </a>
      </li>
    </ul>
  );
};

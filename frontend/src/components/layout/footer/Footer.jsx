import { NavLink } from "react-router-dom";
import { Facebook, Instagram } from "../Icons";
export const Footer = () => {
  return (
    <footer className="py-10 px-5">
      <ul className="flex gap-3.5 justify-center my-1">
        <li>
          <a href="https://www.facebook.com/roxanne.weidele.artist/" target="_blank" className="text-black hover:text-uranian-blue">
            <Facebook className="w-6.5 h-6.5 fill-current" />
            <span className="sr-only">Follow me on Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/roxanneweidele/" target="_blank" className="text-black hover:text-uranian-blue">
            <Instagram className="w-6.5 h-6.5 fill-current" />
            <span className="sr-only">Follow me on Instagram</span>
          </a>
        </li>
      </ul>
      <div className="flex gap-3.5 justify-center my-1">
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
      <div className="text-center text-xs">© Copyright {new Date().getFullYear()} Roxanne Weidele</div>
    </footer>
  );
};

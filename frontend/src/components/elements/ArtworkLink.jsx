import { NavLink } from "react-router-dom";

export const ArtworkLink = ({ img, link, label }) => {
  return (
    <NavLink to={link} className="text-white hover:text-uranian-blue no-underline">
      <img src={img} className="block border-10 border-current w-full" />
      <p className="text-center my-2 uppercase font-heading text-xl tracking-wide">{label}</p>
    </NavLink>
  );
};

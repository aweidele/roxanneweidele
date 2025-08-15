import { NavLink } from "react-router-dom";

export const ArtworkLink = ({ img, link, label }) => {
  return (
    <NavLink to={link} className="text-white hover:text-uranian-blue no-underline group block">
      <div className="aspect-[1800/1243] overflow-hidden border-10 border-current rounded-sm">
        <img src={img} className="block w-full h-full object-cover group-hover:scale-110 transition-300" />
      </div>
      <p className="text-center my-2 uppercase font-heading text-xl tracking-wide">{label}</p>
    </NavLink>
  );
};

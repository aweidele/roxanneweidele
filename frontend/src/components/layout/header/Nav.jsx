import { NavLink } from "react-router-dom";
import { navigation } from "../../../functions/content";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {navigation.map((item) => (
          <li key={item.to} className="text-button uppercase">
            <NavLink to={item.to} className="text-white hover:text-uranian-blue tracking-wide">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { NavLink } from "react-router-dom";
import { navigation } from "../../../functions/content";

const navClasses = `text-white hover:text-uranian-blue tracking-wide inline-block relative after:content-[""] after:w-full after:bg-uranian-blue after:absolute after:left-0 after:top-full after:transition-all after:duration-300`;

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {navigation.map((item) => (
          <li key={item.to} className="text-button uppercase">
            <NavLink to={item.to} className={({ isActive }) => `${navClasses} ${isActive ? "after:h-1" : "after:h-0 after:opacity-0"}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

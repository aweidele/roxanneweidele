import { NavLink, useParams } from "react-router-dom";

const FilterButton = ({ p, active, children, ...props }) => {
  const classes = ["text-button uppercase py-2 px-7.5 transition-all duration-300"];

  classes.push(active ? "text-white bg-gray-800" : "text-black bg-gray-400");
  if (p === "left") {
    classes.push("rounded-l-lg");
  }
  if (p === "right") {
    classes.push("rounded-r-lg");
  }
  return (
    <NavLink className={classes.join(" ")} {...props}>
      {children}
    </NavLink>
  );
};

export const Filter = () => {
  const { medium } = useParams();
  return (
    <div className="flex items-center justify-center gap-0.5 mt-4">
      <FilterButton to="/artwork" active={!medium} p="left">
        All
      </FilterButton>
      <FilterButton to="/artwork/medium/pastels" active={medium === "pastels"}>
        Pastels
      </FilterButton>
      <FilterButton to="/artwork/medium/oils" active={medium === "oils"} p="right">
        Oils
      </FilterButton>
    </div>
  );
};

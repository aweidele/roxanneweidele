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
    <button className={classes.join(" ")} {...props}>
      {children}
    </button>
  );
};

export const Filter = ({ active = "all", onFilter }) => {
  return (
    <div className="flex items-center justify-center gap-0.5 mt-4">
      <FilterButton onClick={() => onFilter("all")} active={active === "all"} p="left">
        All
      </FilterButton>
      <FilterButton onClick={() => onFilter("pastels")} active={active === "pastels"}>
        Pastels
      </FilterButton>
      <FilterButton onClick={() => onFilter("oils")} active={active === "oils"} p="right">
        Oils
      </FilterButton>
    </div>
  );
};

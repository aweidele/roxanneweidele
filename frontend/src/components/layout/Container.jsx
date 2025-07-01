import { containerWidths } from "@shared";

export const Container = ({ w = "wide", className = "", children }) => {
  const classes = [containerWidths[w], className, "m-auto px-5"];
  return <div className={classes.join(" ")}>{children}</div>;
};

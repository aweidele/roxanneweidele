import { themeColors } from "@shared";

export const Section = ({ background = "white", tag = "section", className, children, ...props }) => {
  const Tag = tag;
  const { bg, text } = themeColors[background];
  const classes = ["section", bg, text];
  if (className) classes.push(className);

  return <Tag className={classes.join(" ")}>{children}</Tag>;
};

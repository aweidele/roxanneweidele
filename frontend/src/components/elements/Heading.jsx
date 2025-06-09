import { headingClass } from "@shared";
export const Heading = ({ l = 2, children, className, ...props }) => {
  const Tag = `h${l}`;

  return (
    <Tag className={headingClass(l, className)} {...props}>
      {children}
    </Tag>
  );
};

import { bg } from "@shared";

export const Section = ({ background = "white", children, tag = "section", className = "" }) => {
  const Tag = tag;
  return (
    <Tag className={`${bg[background]} p-5 ${className}`}>
      <div className="max-w-7xl m-auto">{children}</div>
    </Tag>
  );
};

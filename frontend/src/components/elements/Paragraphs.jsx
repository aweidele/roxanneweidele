import { stringToLines } from "@shared";

export const P = ({ children }) => {
  return <p className="text-base mb-4">{children}</p>;
};

export const Paragraphs = ({ content = "", ...props }) => {
  const paragraphs = stringToLines(content);
  return (
    <>
      {paragraphs.map((paragraph) => (
        <P>{paragraph}</P>
      ))}
    </>
  );
};

import { stringToLines } from "@shared";

export const Paragraphs = ({ content, ...props }) => {
  const paragraphs = stringToLines(content);
  console.log(paragraphs);
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p className="text-base mb-4">{paragraph}</p>
      ))}
    </>
  );
};

import { useEffect } from "react";

export const useMetaTags = ({ title, image, url }) => {
  useEffect(() => {
    const metaMap = {
      "og:title": title,
      "og:image": image,
      "og:url": url || window.location.href,
    };

    Object.entries(metaMap).forEach(([property, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, [title, image, url]);
};

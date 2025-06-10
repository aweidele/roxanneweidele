import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

export const ThumbnailScroller = ({ gallery, current }) => {
  const scrollRef = useRef(null);
  const loopedThumbnails = [...gallery]; // 2x for looping

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;

    // Set initial scroll to middle
    container.scrollLeft = scrollWidth;

    const handleScroll = () => {
      console.log("shrimp");
      // if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      //   // Reached near end — reset to middle
      //   container.scrollLeft = scrollWidth;
      // } else if (container.scrollLeft <= 0) {
      //   // Reached near start — reset to middle
      //   container.scrollLeft = scrollWidth;
      // }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="w-screen h-25 overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar">
      <div className="flex gap-0.5 h-full">
        {loopedThumbnails.map((src, i) => (
          <div style={{ aspectRatio: `${src.files.thumb.width} / ${src.files.thumb.height}` }}>
            <NavLink to={`/artwork/${src.slug}`}>
              <img key={i} src={src.files.thumb.url} alt={src.title} className="h-full object-cover flex-shrink-0" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

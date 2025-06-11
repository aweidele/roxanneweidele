import { useEffect, useRef, useState } from "react";
import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { Container } from "../layout";
import { ThumbnailScroller } from "../gallery/ThumbnailScroller";
import { Arrow } from "../layout/Icons";

const InfiniteThumbnailRow = ({ thumbnails }) => {
  const scrollRef = useRef(null);
  const loopedThumbnails = [...thumbnails, ...thumbnails]; // 2x for looping

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;

    // Set initial scroll to middle
    container.scrollLeft = scrollWidth;

    const handleScroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        // Reached near end — reset to middle
        container.scrollLeft = scrollWidth;
      } else if (container.scrollLeft <= 0) {
        // Reached near start — reset to middle
        container.scrollLeft = scrollWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="w-screen h-[6.25rem] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar">
      <div className="flex gap-0.5 h-full">
        {loopedThumbnails.map((src, i) => (
          <img key={i} src={src.files.thumb.url} alt={src.title} className="h-full aspect-auto object-cover flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default InfiniteThumbnailRow;

const NextPrev = ({ dir = "prev", to, children }) => {
  const [hovered, setHovered] = useState(false);
  // const unhoveredClass = dir === hovered ? "-translate-x-[calc(100%-2.5rem)]" : "translate-x-[calc(100%-2.5rem)]";
  const unhoveredClass = () => {
    if (dir === "prev") return !hovered ? "-translate-x-[calc(100%-2.5rem)]" : "";
    return !hovered ? "translate-x-[calc(100%-2.5rem)]" : "";
  };

  return (
    <NavLink className={`${dir === "prev" ? "left-0" : "right-0"} flex items-center absolute z-10 h-full top-0 opacity-50 hover:opacity-100`} to={to} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className={`p-2 bg-white flex gap-1 items-center transition-300 ${dir === "prev" ? "flex-row-reverse" : ""} ${unhoveredClass()}`}>
        <Arrow className={`fill-current w-7  ${dir === "prev" ? "rotate-180" : ""}`} />
        {children}
      </span>
    </NavLink>
  );
};

export const Single = () => {
  const { gallery } = useLoaderData();
  const { slug } = useParams();
  const { files, title, width, height, sold } = gallery.find((item) => item.slug === slug);
  const currentIndex = gallery.findIndex((item) => item.slug === slug);

  const next = gallery[currentIndex < gallery.length - 1 ? currentIndex + 1 : 0];
  const previous = gallery[currentIndex > 0 ? currentIndex - 1 : gallery.length - 1];

  return (
    <div>
      <div className="h-g mb-8 bg-uranian-blue-1000 relative">
        <div className="flex items-center h-full relative">
          <img src={files.original.url} className="w-full h-full object-contain object-center relative z-0" />

          <NextPrev dir="prev" to={`/artwork/${previous.slug}`}>
            Previous
          </NextPrev>
          <NextPrev dir="next" to={`/artwork/${next.slug}`}>
            Next
          </NextPrev>
        </div>

        <div className="bg-cordovan text-white py-1 absolute bottom-0 w-full translate-y-8">
          <Container w="full">
            <div className="flex gap-3.5">
              <div className="grow-1 flex gap-3.5 justify-center">
                <h1 className="uppercase tracking-wider">{title}</h1>
                <div className="tracking-wider">
                  {width}in. x {height}in.
                </div>
              </div>
              <div>Share</div>
            </div>
          </Container>
        </div>
      </div>
      <ThumbnailScroller gallery={gallery} current={slug} />
      {/* <InfiniteThumbnailRow thumbnails={gallery} /> */}
    </div>
  );
};

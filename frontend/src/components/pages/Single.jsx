import { useEffect, useRef } from "react";
import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { Container } from "../layout";
import { ThumbnailScroller } from "../gallery/ThumbnailScroller";

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
        <div className="flex gap-2 h-full">
          <div className="grow-1 order-2">
            <img src={files.original.url} className="w-full h-full object-contain object-center" />
          </div>
          <NavLink className="order-1 flex items-center text-center text-white p-2" to={`/artwork/${previous.slug}`}>
            Previous
          </NavLink>
          <NavLink className="order-3 flex items-center text-center text-white p-2" to={`/artwork/${next.slug}`}>
            Next
          </NavLink>
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

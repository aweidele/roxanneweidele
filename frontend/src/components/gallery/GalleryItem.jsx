import { NavLink } from "react-router-dom";
import { Container } from "../layout";

const ArtInfo = ({ title, width, height }) => {
  return (
    <>
      <h1 className="p-4 sm:text-lg text-white col-span-2 uppercase tracking-wider">{title}</h1>
      <div className="tracking-wider col-span-2 text-center">
        {width}in. x {height}in.
      </div>
      {/* <div>Share</div> */}
    </>
  );
};

export const GalleryItem = ({ item, index }) => {
  const { slug, sold } = item;
  console.log(sold);
  return (
    <>
      {!!sold && <div className="absolute right-[3%] bottom-[3%] bg-cordovan aspect-square p-3 leading-0 text-white uppercase text-xs rounded-full opacity-90 flex items-center tracking-wide -rotate-45">Sold</div>}
      <NavLink to={`/artwork/${slug}`} className="text-white no-underline max-sm:hidden absolute w-full h-full top-0 left-0 z-50 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 hover:bg-rose-quartz-70">
        <div className="grid grid-cols-2">
          <ArtInfo {...item} />
        </div>
      </NavLink>

      <Container w="full" className="sm:hidden bg-cordovan text-white py-1">
        <div className="flex items-center gap-3.5">
          <ArtInfo {...item} />
        </div>
      </Container>
    </>
  );
};

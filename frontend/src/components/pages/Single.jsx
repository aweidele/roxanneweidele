import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { Container } from "../layout";

export const Single = () => {
  const { gallery } = useLoaderData();
  const { slug } = useParams();
  const { files, title, width, height, sold } = gallery.find((item) => item.slug === slug);
  const currentIndex = gallery.findIndex((item) => item.slug === slug);

  const next = gallery[currentIndex < gallery.length - 1 ? currentIndex + 1 : 0];
  const previous = gallery[currentIndex > 0 ? currentIndex - 1 : gallery.length - 1];

  console.log(currentIndex, gallery.length);
  // console.log("Current", current);
  console.log("Next", next);
  console.log("Previous", previous);
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
      <div>thumbnails</div>
    </div>
  );
};

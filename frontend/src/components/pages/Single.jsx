import { useParams, useLoaderData } from "react-router-dom";

export const Single = () => {
  const { gallery } = useLoaderData();
  const { slug } = useParams();
  const current = gallery.find((item) => item.slug === slug);
  console.log(gallery, slug);
  return (
    <div>
      <div className="h-g bg-uranian-blue-1000">
        <img src={current.files.original.url} className="w-full h-full object-contain object-center" />
      </div>
      <div>
        <h1>{current.title}</h1>
      </div>
      <div>thumbnails</div>
    </div>
  );
};

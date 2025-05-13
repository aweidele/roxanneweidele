import { useEffect } from "react";
import { useApi } from "../functions/useApi";

export const Temp = () => {
  const { data, loading, error, request } = useApi();
  useEffect(() => {
    request();
  }, [request]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const lg = data.media.filter((item) => item.size_key === "lg");
  console.log(lg);
  return (
    <div className="flex flex-wrap">
      {lg.map((img) => (
        <div className="max-w-[300px]">
          <img src={img.url} />
        </div>
      ))}
    </div>
  );
};

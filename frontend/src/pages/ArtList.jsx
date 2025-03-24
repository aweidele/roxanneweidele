import { Link, useLoaderData } from "react-router";

export function ArtList() {
  const data = useLoaderData();
  const artwork = data.artwork;
  console.log(data);
  return (
    <ul>
      {artwork.map((art) => (
        <li key={art.id}>
          <Link to={art.id}>{art.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function artLoader() {
  const response = await fetch("https://rw-api.lndo.site/");
  if (!response.ok) {
    //
  } else {
    return response;
  }
}

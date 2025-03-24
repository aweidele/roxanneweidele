import { useParams } from "react-router";
export default function ArtSingle() {
  const params = useParams();

  return (
    <div>
      <h2>{params.artId}</h2>
    </div>
  );
}

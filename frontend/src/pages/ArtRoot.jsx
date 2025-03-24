import { Outlet } from "react-router";
export default function ArtRoot() {
  return (
    <>
      <h2 className="text-center">Art</h2>
      <Outlet />
    </>
  );
}

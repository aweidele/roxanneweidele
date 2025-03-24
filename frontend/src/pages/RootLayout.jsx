import { Outlet } from "react-router";
export default function RootLayout() {
  return (
    <>
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

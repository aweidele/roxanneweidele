import { useAppContext } from "../AppContext";

export const Template = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  return (
    <>
      <header className="sticky top-0 w-full text-center p-5 h-18 bg-white">
        <h1>Roxanne Weidele</h1>
      </header>
      <div className="flex w-full">
        {/* {isAuthenticated && (
          <nav>
            <ul>
              <li>Artwork</li>
              <li>Pages</li>
            </ul>
          </nav>
        )} */}
        <main className="py-5 grow">{children}</main>
      </div>
    </>
  );
};

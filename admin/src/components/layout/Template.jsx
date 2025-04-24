export const Template = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 w-full text-center p-5 h-18 bg-white">
        <h1>Roxanne Weidele</h1>
      </header>
      <main className="pt-10">{children}</main>
    </>
  );
};

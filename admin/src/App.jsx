import { Login } from "./components/Login";

function App() {
  return (
    <>
      <header className="fixed top-0 w-full">
        <h1>This is the admin screen</h1>
      </header>
      <main className="pt-10">
        <Login />
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import { apiURL } from "@shared";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hi</div>
      <div>{apiURL}</div>
    </>
  );
}

export default App;

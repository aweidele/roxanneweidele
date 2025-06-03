import { useEffect, useState } from "react";
import { apiURL, useApi } from "@shared";
const bg = ["bg-sage", "bg-rose-quartz", "bg-china-rose", "bg-cordovan", "bg-uranian-blue", "bg-uranian-blue-800"];

import "./App.css";

function App() {
  const [gallery, setGallery] = useState([]);
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const { request } = useApi();
  console.log(gallery);

  useEffect(() => {
    const getGallery = async () => {
      const result = await request();
      setGallery(result.artwork.filter((item) => item.published));
    };
    getGallery();
  }, []);

  const squareClick = (bgclass) => {
    navigator.clipboard
      .writeText(bgclass.replace(/^bg-/, ""))
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <h1>Future home of Roxanne Weidele.com</h1>
      {bg.map((bgclass, index) => (
        <div key={bgclass} className={`w-4 h-4 m-1 inline-block relative ${bgclass}`} onMouseEnter={() => setHoveredSquare(index)} onMouseLeave={() => setHoveredSquare(null)} onClick={() => squareClick(bgclass)}>
          {hoveredSquare === index && <span className="absolute top-full text-xs left-1/2 -translate-x-1/2 w-50">{bgclass}</span>}
        </div>
      ))}
      <div>{apiURL}</div>
      <ul>
        {gallery.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

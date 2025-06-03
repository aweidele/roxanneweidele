import { useEffect, useState } from "react";
import { apiURL, useApi } from "@shared";

import "./App.css";

function App() {
  const [gallery, setGallery] = useState([]);
  const { request } = useApi();
  console.log(gallery);

  useEffect(() => {
    const getGallery = async () => {
      const result = await request();
      setGallery(result.artwork.filter((item) => item.published));
    };
    getGallery();
  }, []);

  return (
    <>
      <div>hi</div>
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

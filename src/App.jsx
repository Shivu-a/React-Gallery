import { useEffect, useState } from "react";
import { Photo } from "./components/Photo";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  console.log(photos);

  const getPhotos = async () => {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?client_id=liT8ZK557Rh9o6hcEfwcWZg-fK1kVqJzsPvjSgALPm0&count=20"
    );
    const data = await response.json();

    console.log(data);

    setPhotos(await data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <div className="imageDiv">
        {photos.map((element) => (
          <Photo
            key={element.urls.regular}
            link={element.urls.regular}
            linkFullImage={element.urls.full}
            linkToOriginal={element.links.html}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

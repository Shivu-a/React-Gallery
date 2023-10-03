import { useEffect, useState } from "react";
import { Photo } from "./components/Photo";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPhotos = async () => {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?client_id=liT8ZK557Rh9o6hcEfwcWZg-fK1kVqJzsPvjSgALPm0&count=20&orientation=portrait"
    );
    response
      .json()
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(({ message }) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        {loading ? (
          <div className="spinnerContainer">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {error && (
              <div className="error">
                There was an error loading the images 😓, you were most likely
                rate limited by Unsplash.
                <br />
                If the problem continues after an hour you can try and contact
                me and I'll fix it!
              </div>
            )}
            <div className="imageDiv">
              {photos.map(
                ({
                  id,
                  urls,
                  links,
                  description,
                  alt_description,
                  width,
                  height,
                }) => (
                  <Photo
                    key={id}
                    link={urls.raw}
                    description={description}
                    alt_description={alt_description}
                    linkFullImage={urls.small}
                    linkToOriginal={links.html}
                    height={height}
                    width={width}
                  />
                )
              )}
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;

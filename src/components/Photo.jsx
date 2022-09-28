import React, { useState } from "react";
import { FullPhoto } from "./FullPhoto";

export const Photo = ({ link, linkFullImage, linkToOriginal }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageClick = () => {
    setShowFullImage(true);
  };

  return (
    <>
      {showFullImage && (
        <div className="background">
          <button
            onClick={() => setShowFullImage(false)}
            className="closeButton"
          >
            X
          </button>

          <FullPhoto image={linkFullImage} />

          <a target={"_blank"} href={linkToOriginal}>
            Link to original
          </a>
        </div>
      )}

      <div className="image">
        {!imgLoaded && (
          <div className="spinnerContainer">
            <div className="spinner"></div>
          </div>
        )}
        <img
          onLoad={() => setImgLoaded(true)}
          src={link}
          alt={`${link} Photo`}
          onClick={handleImageClick}
        />
      </div>
    </>
  );
};

import React, { useState } from "react";

export const Photo = ({ link, linkFullImage, linkToOriginal }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fullImgLoaded, setFullImgLoaded] = useState(false);

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
          {!fullImgLoaded && (
            <div className="spinnerContainer">
              <div className="spinner"></div>
            </div>
          )}

          <img
            style={fullImgLoaded ? {} : { display: "hidden" }}
            onLoad={() => setFullImgLoaded(true)}
            className="fullImage"
            src={linkFullImage}
          />
          <a target={"_blank"} href={linkToOriginal}>
            Link to original
          </a>
        </div>
      )}

      {!imgLoaded && <div className="spinner"></div>}
      <img
        onLoad={() => setImgLoaded(true)}
        src={link}
        alt={`${link} Photo`}
        onClick={handleImageClick}
      />
    </>
  );
};

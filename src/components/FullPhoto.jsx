import React, { useState } from "react";

export const FullPhoto = ({ image }) => {
  const [fullImgLoaded, setFullImgLoaded] = useState(false);

  return (
    <div className="fullImageContainer">
      {!fullImgLoaded && (
        <div className="spinnerContainer">
          <div className="spinner"></div>
        </div>
      )}

      <img
        style={fullImgLoaded ? {} : { display: "hidden" }}
        onLoad={() => setFullImgLoaded(true)}
        className="fullImage"
        src={image}
      />
    </div>
  );
};

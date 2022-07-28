import React, { useState } from "react";
import { PopUpImage } from "./PopUpImage";

export const GalleryImg = ({ source }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const viewImage = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      {isLoading && (
        <span className="w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></span>
      )}
      <img
        onClick={() => {
          viewImage();
        }}
        loading="lazy"
        onLoad={() => {
          setIsLoading(false);
        }}
        className="object-contain max-h-96 rounded-md border-2 border-transparent transition-all ease-in-out hover:border-yellow-400 hover:-translate-y-2"
        src={source}
      />

      {popUp && <PopUpImage viewImage={viewImage} source={source} />}
    </>
  );
};

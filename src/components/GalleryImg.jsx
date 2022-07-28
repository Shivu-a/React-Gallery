import React, { useState } from "react";

export const GalleryImg = ({ source }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <span className="w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></span>
      )}
      <img
        onLoad={() => {
          setIsLoading(false);
        }}
        className="object-contain max-h-96"
        src={source}
      />
    </>
  );
};

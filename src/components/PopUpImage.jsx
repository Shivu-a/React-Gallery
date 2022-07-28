import React from "react";

export const PopUpImage = ({ source, viewImage }) => {
  return (
    <div className="flex justify-center bg-black bg-opacity-90 fixed top-0 left-0 w-full h-screen">
      <button
        onClick={viewImage}
        className="fixed right-2 top-0 text-white text-xl p-6"
      >
        X
      </button>
      <img className="max-h-screen max-w-full object-contain" src={source} />
    </div>
  );
};

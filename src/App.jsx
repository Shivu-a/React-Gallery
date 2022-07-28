import React, { useEffect, useState } from "react";
import { GalleryImg } from "./components/GalleryImg";
import { getImageLinks } from "./helpers/getImageLinks";

export const App = () => {
  const [imagenes, setImagenes] = useState(["caca"]);

  const fetchImages = async () => {
    setImagenes(await getImageLinks());
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-wrap overflow-auto p-4 gap-4 bg-slate-900 h-screen w-full">
      {imagenes.map((imagen) => (
        <GalleryImg source={imagen} key={imagen} />
      ))}
    </div>
  );
};

export const getImageLinks = async () => {
  const url = `https://raw.githubusercontent.com/Shivu-a/React-Gallery/main/src/json/images.json`;

  const respuesta = await fetch(url);

  const { images } = await respuesta.json();

  return images;
};

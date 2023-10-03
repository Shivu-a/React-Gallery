export const Photo = ({
  linkFullImage,
  linkToOriginal,
  alt_description,
  description,
  width,
  height,
}) => {
  const handleImageClick = () => {
    window.open(linkToOriginal, "_blank", "noopener noreferrer");
  };

  return (
    <div className="imageContainer">
      <img
        width={"300px"}
        height={height * (300 / width)}
        style={{ background: "white" }}
        src={linkFullImage}
        alt={description || alt_description}
        onClick={handleImageClick}
      />
      <span>{description || alt_description}</span>
    </div>
  );
};

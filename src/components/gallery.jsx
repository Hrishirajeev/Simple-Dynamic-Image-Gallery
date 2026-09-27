import ImageCard from "./ImageCard";

function Gallery({ images, onDelete }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Gallery;
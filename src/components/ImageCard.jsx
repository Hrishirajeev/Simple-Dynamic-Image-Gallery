function ImageCard({ image, onDelete }) {
  const handleDelete = () => {
    onDelete((prevImages) =>
      prevImages.filter((item) => item.id !== image.id)
    );
  };

  return (
    <div className="card">
      <button className="delete-btn" onClick={handleDelete}>
        ×
      </button>

      <img src={image.url} alt={image.title} />

      <h2>{image.title}</h2>
      <p>{image.description}</p>
    </div>
  );
}

export default ImageCard;
import { useState } from "react";
import "./App.css";
import About from "./components/About";

import flower from "./assets/flower.jpg";
import food from "./assets/food.jpg";
import forest from "./assets/forest.jpg";
import moutain from "./assets/moutain.jpg";
import city from "./assets/city.jpg";
import beach from "./assets/beach.jpg";
import sunset from "./assets/sunset.jpg";
import desert from "./assets/desert.jpg";

import Gallery from "./components/gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const images = [
  {
    id: 1,
    url: flower,
    title: "Flower",
    description: "A beautiful flower"
  },
  {
    id: 2,
    url: food,
    title: "Food",
    description: "Delicious food"
  },
  {
    id: 3,
    url: forest,
    title: "Forest",
    description: "A peaceful forest"
  },
  {
    id: 4,
    url: moutain,
    title: "Mountain",
    description: "A beautiful mountain"
  },
  {
    id: 5,
    url: city,
    title: "City",
    description: "A beautiful city"
  },
  {
    id: 6,
    url: beach,
    title: "Beach",
    description: "A peaceful beach"
  },
  {
    id: 7,
    url: sunset,
    title: "Sunset",
    description: "A beautiful sunset"
  },
  {
    id: 8,
    url: desert,
    title: "Desert",
    description: "A beautiful desert"
  }
];

function App() {
  const [galleryImages, setGalleryImages] = useState(images);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const newImage = {
      id: Date.now(),
      url: URL.createObjectURL(file),
      title: file.name,
      description: "Uploaded image"
    };

    setGalleryImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <>
      <Navbar />

      <section className="hero" id="home">
      <h1>Welcome to My Image Gallery</h1>
      <p>Explore, add, and enjoy your favorite moments.</p>
      </section>

      <label className="add-image-btn">
      + Add Image
      <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      />
      </label>

      <div id="gallery">
      <Gallery
        images={galleryImages}
        onDelete={setGalleryImages}
      />
      </div>

      <About />
      <Footer />
    </>
  );
}

export default App;
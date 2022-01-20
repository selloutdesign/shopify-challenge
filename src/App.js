import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import "./styles/output.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("Sun");

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${term}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.collection.items);
        console.log(data.collection.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.data[0].nasa_id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
// import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log("Error fetching data:", err));
  }, [query]);

  const handleQuery = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQuery} />
      <Nav />
      <PhotoContainer data={photos} />
    </div>
  );
}

export default App;

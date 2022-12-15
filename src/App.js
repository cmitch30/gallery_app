import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
// import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let activeFetch = true

    axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(res => {
      if (activeFetch) {
        setPhotos(res.data.photos.photo)
      }
    })
    .catch(err => {
      console.log('Error fetching data:', err)
    })
    return () => {activeFetch = false}
    // fetch(
    //   `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setPhotos(data.photos.photo))
    //   .catch((err) => console.log("Error fetching data:", err));
  }, [query]);

  const handleQuery = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div className="container">
      <SearchForm changeQuery={handleQuery} />
      <Navigation/>
      {/* <Routes>
        <Route path="/cats" element={ <PhotoContainer data={photos} />} />
        <Route path="/dogs" element={<PhotoContainer data={photos} />} />
        <Route path="/spiders" element={<PhotoContainer data={photos} />} />
      </Routes> */}
      <PhotoContainer data={photos} query={query} />
    </div>
  );
}

export default App;

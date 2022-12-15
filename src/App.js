import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import { Route, Routes, Navigate} from "react-router-dom";
import Navigation from "./components/Navigation";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";
import axios from "axios";
import NotFound from "./components/NotFound";

function App() {
    const [photos, setPhotos] = useState([]);
    const [spain, setSpain] = useState([]);
    const [tokyo, setTokyo] = useState([]);
    const [thailand, setThailand] = useState([]);

  const performSearch = (search) => {
   console.log(search)
    axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(res => {
         if (search === "spain") {
        setSpain(res.data.photos.photo);
      } else if (search === "tokyo") {
        setTokyo(res.data.photos.photo);
      } else if (search=== "thailand") {
        setThailand(res.data.photos.photo);
      } else {
        setPhotos(res.data.photos.photo);
      }
    })
    .catch(err => {
      console.log('Error fetching data:', err)
    })
   
    // fetch(
    //   `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setPhotos(data.photos.photo))
    //   .catch((err) => console.log("Error fetching data:", err));
  }

  // const handleQuery = (searchText) => {
  //   setQuery(searchText);
  // };

    useEffect(() => {
      performSearch();
      performSearch("spain");
      performSearch("tokyo");
      performSearch("thailand");
    }, []);

  return (
    <div className="container">
      <SearchForm changeQuery={performSearch} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/spain" />} />
        <Route path="/spain" element={<PhotoContainer data={spain} />} />
        <Route
          path="/tokyo"
          element={<PhotoContainer data={tokyo} />}
        />
        <Route path="/thailand" element={<PhotoContainer data={thailand} />} />
        <Route
          path="/:search"
          element={<PhotoContainer data={photos} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

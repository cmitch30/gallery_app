import React from "react";
import SearchForm from "./components/SearchForm";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
    </div>
  );
}

export default App;

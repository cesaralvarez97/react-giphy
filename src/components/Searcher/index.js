import React, { useState } from "react";
import { useLocation } from "wouter";

export default function Searcher() {
  const [, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Busca un gif aquí..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button>Buscar!</button>
      </form>
    </>
  );
}

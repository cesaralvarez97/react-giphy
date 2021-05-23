import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <h3>Última Búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}

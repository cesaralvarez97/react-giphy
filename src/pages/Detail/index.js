import React, { useContext } from "react";
import GifsContextProvider from "../../context/GifsContext";
import Gif from "../../components/Gif";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContextProvider);
  const gif = gifs.find((singlegif) => singlegif.id === params.id);
  return <Gif {...gif} />;
}

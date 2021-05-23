import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import { Link, Route } from "wouter";
import SearchResults from "./pages/SearchResult";
import Searcher from "./components/Searcher";

export default function App() {
  return (
    <StaticContext.Provider value={{ name: "kritikalcode" }}>
      <div className="App">
        <section className="App-content">
          <h1>Opino que Gif</h1>
          <Link to="/">
            <img className="App-logo" alt="Opino que Gif" src="/icon.jpeg" />
          </Link>
          <Searcher />
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

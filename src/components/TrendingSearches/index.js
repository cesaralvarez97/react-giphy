import React, { useEffect, useState } from "react";
import getTrendingTermins from "../../services/getTrendingTerms";
import Category from "../Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTermins().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

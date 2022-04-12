import axios from "axios";
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const Home = () => {
  const [countriesData, setCountriesdata] = useState([]);
  const [rangeValue, setRangeValue] = useState(12);

  // lancer une action quend le composant se monte
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountriesdata(res.data));
  }, []);

  return (
    <div className="home-container">
      <Logo />
      <Navigation />
      <input
        type="range"
        min="1"
        max="250"
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <span>{rangeValue}</span>
      <div className="countries">
        {countriesData
          // .sort((a, b) => b.population - a.population)
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          // limiter affichage
          //.slice(0, 20)
          //filtres
          //.filter((country) => country.region === "Europe")
          //.filter((country) => country.region.includes("Asia"))
          .slice(0, rangeValue)
          .map((country) => (
            <Card country={country} key={country.cca3} />
          ))}
      </div>
    </div>
  );
};

export default Home;

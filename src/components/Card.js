import React from "react";

const Card = ({ country }) => {
  return (
    <div className="card">
      <h2>{country.translations.fra.common}</h2>
      <img src={country.flags.svg} alt="" />
      <h3>{country.capital}</h3>
      <p>Pop : {country.population.toLocaleString()}</p>
    </div>
  );
};

export default Card;

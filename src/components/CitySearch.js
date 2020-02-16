import React, { useState, useEffect, Fragment } from "react";
import { numberWithCommas, HighlightText } from "../utils/textTransform.js";

const CitySearch = ({ cities }) => {
  const [cityOrState, setCityOrState] = useState("");
  const [matchedCities, setMatchedCities] = useState([]);

  const findMatches = (wordToMatch, cities) => {
    if (!wordToMatch.length) {
      return [];
    }
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  useEffect(() => {
    const matchedCities = findMatches(cityOrState, cities);
    setMatchedCities(matchedCities);
  }, [cityOrState, cities]);

  const getCityItems = () =>
    matchedCities.map((place, i) => {
      const cityName = (
        <HighlightText text={place.city} highlight={cityOrState} />
      );
      const stateName = (
        <HighlightText text={place.state} highlight={cityOrState} />
      );
      return (
        <li key={i}>
          <span className="name">
            {cityName}, {stateName}
          </span>
          <span className="population">
            {numberWithCommas(place.population)}
          </span>
        </li>
      );
    });

  const citiesList = getCityItems();
  //TODO: Show state when there are no matches found
  //String = "No matches found" (when cityOrstate is longer than 1 string and the matchedCities is empty)

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="City or State"
        value={cityOrState}
        onChange={e => setCityOrState(e.target.value)}
      ></input>
      <ul className="suggestions">
        {!matchedCities.length ? (
          <Fragment>
            <li>Filter for a city</li>
            <li>or a state</li>
          </Fragment>
        ) : (
          citiesList
        )}
      </ul>
    </form>
  );
};

export default CitySearch;

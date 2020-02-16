import React from "react";
import CitySearch from "./CitySearch";

//TODO: For now we are only querying the full data once and filtering using
//the user's text input value. What if we wanted to the API everytime
//to make sure our data was realtime. We will want to send
//an function to the SearchView to handle when new request is inputted
//and will want to use debounce

const CitySearchController = () => {
  //TODO: import api from "admin-api" //use to import specific api endpoint
  //example calling api.cities would know to use the endpoint
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];

  //TODO:catch error if there is any
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

  //TODO: handle error if any
  return <CitySearch cities={cities} />;
};

export default CitySearchController;

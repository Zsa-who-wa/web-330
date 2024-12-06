"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Wendy Rzechula
      Date: 12/06/2024  

      Filename: project11-02.js
*/

//Get references to the input elements
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// Add event handler for the postalCode field blur event
postalCode.onblur = function() {
  let postalCodeValue = postalCode.value.trim();
  let countryValue = country.value;
  
  // Clear the place and region fields
  place.value = "";
  region.value = "";
  
  // Fetch API to get the location information
  fetch(`https://api.zippopotam.us/${countryValue}/${postalCodeValue}`)
  // Parse the JSON response
  .then(response => {
    if (!response.ok) throw new Error("Invalid postal code or country.");
    return response.json();
  })
  
  // Update place and region fields with data
  .then(json => {
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
  })
  
  // Handle any errors
  .catch(error => {
    console.error("Error fetching data:", error);
  });
};
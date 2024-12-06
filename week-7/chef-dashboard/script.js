/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Wendy Rzechula
  Date: 12/07/24
  Filename: 
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  { name: "Chef Gary", specialty: "Beef Wellington", weakness: "Consomme", restaurantLocation: "New York, NY"}
  { name: "Chef Elise", specialty: "Macarons", weakness: "Souffles", restaurantLocation: "San Francisco, CA"}
  { name: "Chef Liam", specialty: "Ceviche", weakness: "Pufferfish", restaurantLocation: "Boston, MA"}
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[0]) : reject("Failed to load Chief 1 data.");
    }, 2000);
    });
  }

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2(
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[1]) : reject("Failed to load Chief 2 data.");
    }, 3000);
    });
  }

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3(
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[2]) : reject("Failed to load chief 3 data.");
    }, 4000);
    });
    
    Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then((results) => {
     results.forEach((result, index) => {
      const chefContainer = document.getElementById(`chef${index + 1}`).querySelector(`.content`);
      if (result.status === "fulfilled") {
        chefContainer.innerHTML =
          <p><strong>Name:</strong> ${result.value.name}</p>
          <p><strong>Specialty:</strong> ${result.value.specialty}</p>
          <p><strong>Weakness:</strong> ${result.value.waekness}</p>
          <p><strong>Restaurant Location:</strong> ${result.value.resutaurantLocation</p>
            ;
      } else {
        chefContainer.innerHTML = <p class="error"> ${result.reason}</p>;
      }
     });
    });
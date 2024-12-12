/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Wendy Rzechula
  Date: 12/07/24
  Filename: script.js
*/

"use strict";

// Define array chef objects
let chefs = [
  { name: "Chef Gary", specialty: "Beef Wellington", weakness: "Consomme", restaurantLocation: "New York, NY"},
  { name: "Chef Elise", specialty: "Macarons", weakness: "Souffles", restaurantLocation: "San Francisco, CA"},
  { name: "Chef Liam", specialty: "Ceviche", weakness: "Pufferfish", restaurantLocation: "Boston, MA"},
];

// Function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[0]) : reject("Failed to load Chef 1's data.");
    }, 2000);
  });
}

// Function to retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[1]) : reject("Failed to load Chef 2's data.");
    }, 3000);
  });
}

// Function to retrieve the third chef's information
function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(chefs[2]) : reject("Failed to load chef 3's data.");
    }, 4000);
  });
}

Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then((results) => {
  results.forEach((result, index) => {
    const chefContainer = document.getElementById(`chef${index + 1}`).querySelector(`.content`);
    if (result.status === "fulfilled") {
      chefContainer.innerHTML = `
      <p><strong>Name:</strong> ${result.value.name}</p>
      <p><strong>Specialty:</strong> ${result.value.specialty}</p>
      <p><strong>Weakness:</strong> ${result.value.weakness}</p>
      <p><strong>Restaurant Location:</strong> ${result.value.restaurantLocation}</p>
      `;
    } else {
      chefContainer.innerHTML = `<p class="error">${result.reason}</p>`;
      }
    });
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic JavaScript (1st ed.).
*/
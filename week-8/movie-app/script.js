/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Wendy Rzechula
  Date: 12/12/2024
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Deadpool & Wolverine",
    director: "Shawn Levy",
    year: 2024,
    synopsis: "Deadpool teams up with Wolverine to protect the multiverse and save his world from an existential threat after being recruited by the Time Variance Authority."
  },
  {
    title: "The Boy in the Striped Pajamas",
    director: "Mark Herman",
    year: 2008,
    synopsis: "During World War II, 8-year-old Bruno befriends Shmuel, a Jewish boy in a concentration camp, despite the barbed-wire fence separating them and their oblivion to the grim reality of their surroundings."
  },
  {    
    title: "Memoir of a Snail",
    director: "Adam Elliot",
    year: 2024,
    synopsis: "After a series of misfortunes, a snail-collecting, melancholic misfit learns how to find confidence within herself amid the clutter of everyday life."
  }
];

// Function to fetch a movie by title
function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found.");
      }
    }, 1000); // 1 Second delay
  });
}

// Async function to display movie
async function displayMovie(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title-input").value.trim();
  const titleElement = document.getElementById("movie-title");
  const directorElement = document.getElementById("movie-director");
  const yearElement = document.getElementById("movie-year");
  const synopsisElement = document.getElementById("movie-synopsis");
  const errorMessageElement = document.getElementById("error-message");

  //Clear previous information
  titleElement.textContent = "";
  directorElement.textContent = "";
  yearElement.textContent = "";
  synopsisElement.textContent = "";
  errorMessageElement.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);
    titleElement.textContent = `Title: ${movie.title}`;
    directorElement.textContent = `Director: ${movie.director}`;
    yearElement.textContent = `Release Year: ${movie.year}`;
    synopsisElement.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    errorMessageElement.textContent = error;
  }
}

// Event listener for form submission
document.getElementById("movie-form").addEventListener("submit", async (event) => {
  await displayMovie(event);
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/
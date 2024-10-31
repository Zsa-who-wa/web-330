/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Wendy Rzechula
  Date: 10/31/2024
  Filename: script.js
*/

"use strict";

// Function to create a new character using closures
function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    },
  };
}

// Event listener for the "Generate Hero" button
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();
    
    // Get form input values
    const name = document.getElementById("heroName").value.trim();
            
    const gender = document.getElementById("heroGender").value;
  
    const characterClass = document.getElementById("heroClass").value;
    
    // Creates character
    if (name && gender && characterClass) {
      // Create the character using the closure function
    const character = createCharacter(name, gender, characterClass);
    
    // Display the character information
    const output = document.getElementById("characterOutput");
    output.innerHTML = `
      <h2>Your Hero!</h2>
      <p><strong>Name:</strong> ${character.getName()}</p>
      <p><strong>Gender:</strong> ${character.getGender()}</p>
      <p><strong>Class:</strong> ${character.getClass()}</p>
    `;
    output.style.display = "block";

  } else {
    alert("Please fill in all field to create your hero.");
  }
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic JavaScript (1st ed.).
*/
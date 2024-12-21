"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Wendy Rzechula
      Date:   12/19/2024

      Filename: project12-03.js
*/

// Click event for <article> > <h2> elements
$("article > h2").click(function () {
  // Declared variables
  let heading = $(this); // The clicked heading
  let list = heading.next(); // The next sibling element
  let headingImage = heading.children("img"); // The child image of the heading

  // Toggle the visibility of the list
  list.slideToggle(500);

  // Change the image based on it's current source
  if (headingImage.attr("src") === "plug.png") {
    headingImage.attr("src", "minus.png");
  } else {
    headingImage.attr("src", "plus.png");
  }
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/
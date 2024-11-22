/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Wendy Rzechula
  Date: 11/21/2024
  Filename:
*/

// in-memory object array for each table in the restaurant
let tables = [
  // Table objects
  {tableNumber: 1, capacity: 2, isReserved: false},
  {tableNumber: 2, capacity: 4, isReserved: false},
  {tableNumber: 3, capacity: 8, isReserved: false},
  {tableNumber: 4, capacity: 12, isReserved: false},
];

// Function reserveTable
function reserveTable(tableNumber, callback, delay) {
  // Find a table based on the table number
  let table = tables.find(t => t.tableNumber === parseInt(tableNumber));
  
  if (!table) {
    callback("Error: Table does not exist.");
    return;
  }
  
  if (table.isReserved) {
    callback("Sorry, this table is already reserved");
    return;
  }
  
  table.isReserved = true;
  setTimeout(() => {
    callback(`Table ${tableNumber} has been successfully reserved!`);
  }, delay);
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    
    const name = document.getElementById("name").value;
    const tableNumber = document.getElementById("tableNumber").value;
    
    const messageElement = document.getElementById("message");
    reserveTable(tableNumber, function (message) {
      messageElement.textContent = `${name}, ${message}`;
    }, 2000);
  });

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Wendy Rzechula
      Date: 10/25/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for the Timer Object
function Timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timerID = null;
}

// runPause() method of the Timer object Prototype
Timer.prototype.runPause = function (timer, minBox, secBox) {
    if (timer.timerID) { // Checks to see if timer is running
        // Pause the timer
        window.clearInterval(timer.timerID);
        timer.timerID = null;
    } else {
        //Start the timer with a 1 second interval
        timer.timerID = window.setInterval(function() {
            countdown(timer, minBox, secBox);
        }, 1000);
    }
};

// Countdown function to update the timer
function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) {
        timer.seconds -= 1; // decrease seconds by 1
    } else if (timer.minutes > 0) {
        timer.minutes -= 1; // decrease minutes by 1
        timer.seconds = 59; // reset seconds to 59
    } else {
        // TImer has reached 0:0, timer is stopped
        window.clearInterval(timer.timerID);
        timer.timerID = null;
    }
    
    // Update the input fields with the current timer values
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
}

"use strict";

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Instance of the Timer object
let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

// Update myTimer's minutes when minBox value changes
minBox.onchange = function() {
    myTimer.minutes = parseInt(minBox.value);
};

// Update myTimer's seconds when secBox value changes
secBox.onchange = function() {
    myTimer.seconds = parseInt(secBox.value);
};

// Start or pause the timer when the button is clicked
runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
};
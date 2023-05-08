// 1 -- Select each button

let redBtn = document.getElementById("redButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");


// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToRed() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
}

function switchToWhite() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

function switchToBlue() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
    body.style.color = "white";
}

function switchToYellow() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    body.style.color = "blue";
}



// 2 -- Add an event listener to each circle
redBtn.addEventListener("click", switchToRed);
whiteBtn.addEventListener("click", switchToWhite);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchToYellow);
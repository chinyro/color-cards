//Generate colors RGB
//Generate array with random colors for each square
//User choose a color
//change colors
//Reset game

const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelectorAll("#reset");
const modeBtn = document.querySelectorAll(".mode");
const easyBtn = document.querySelectorAll(".mode");

let numSquares = 6;
let colors = [];
let pickedColor;

// User selection mode

// User selection mode
function setupMode() {
    for(let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            for (var i = 0; i < modeBtn.length; i++) {
                modeBtn[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset() {
    colors = randomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "2c8e99";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

//change colors
function changeColors(color) {
    for(let i = 0; i <squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

// User choose a color
function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generate array with random colors for each square
function randomColors(num) {
    let arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(generateColor());
    }
    return arr;
}

//Generate colors RGB
function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb ${r},${g},${b}`;
}

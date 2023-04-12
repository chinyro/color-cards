let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	//squares listeners
	setUpSquares();
	reset();
}

function setUpModeButtons (){
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//Refactor to ternary operator
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// reset();
            if(this.textContent === "Easy") {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
		});
	}
}

function setUpSquares(){
	for (let i = 0; i < squares.length; i++) {
		//click listeners to squares
		squares[i].addEventListener("click", function (){
			//grab color of picked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedColor | correct choice
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			//incorrect choice
			else {
				this.style.backgroundColor = "#5A304C";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset (){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//empty text message
	messageDisplay.textContent = "";
	//change colors of squares
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#4BDCD3";
}

//Reset button
resetButton.addEventListener("click", function(){
	reset();
})

//makes all squares the color as the correct answer
function changeColors(color){
	//loop through all squares
	for(let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
//random main color picker to guess
function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate an array with x number of rgb values
function generateRandomColors(num){
	//make array
	let arr= [];
	//add num random colors to array
	for (let i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

// Generate random numbers for RGB values
function randomColor(){
	//generate a value for red , number from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//generate a value for green , number from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//generate a value for blue , number from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
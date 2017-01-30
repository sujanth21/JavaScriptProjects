var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Color = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add basic colors to squares
  squares[i].style.background = colors[i];

  //add event listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color for clicked ones
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1Color.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  });

}

function changeColor (color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change square colors to given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  //make an array
  var arr = [];
  //repaet num times
  for (var i = 0; i < num; i++) {
    //add num randam colors to array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor () {
  //pick random red color
  var red = Math.floor(Math.random() * 256);
  //pick random green color
  var green = Math.floor(Math.random() * 256);
  //pick random blue color
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

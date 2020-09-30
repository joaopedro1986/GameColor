var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
]

var numbSquares = 6;
var colors = generateRandomColors(numbSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');

easyButton.addEventListener("click", function() {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numbSquares = 3;
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.background = colors [i];
        } else {
            squares[i].style.background = "none";
        }
    }


})

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numbSquares = 6;
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
            squares[i].style.background = colors [i];
            squares[i].style.background = "block";

    }
})
resetButton.addEventListener("click", function() {
    
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent= "New Colors";


})

colorDisplay.textContent = pickedColor;

for (var i=0; i< squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listiners to squares
    squares[i].addEventListener("click", function(){
     //grab color of clicked square
     var clickedColor = this.style.backgroundColor;
  
    
     if (clickedColor === pickedColor){
         messageDisplay.textContent="Correct!";
         resetButton.textContent= "Play Again?";
            changeColor(clickedColor);
           h1.style.backgroundColor = clickedColor;
     } else {
         this.style.background="#232323";
         messageDisplay.textContent="Try Again";
     }
    });
}

function changeColor (color) {
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
        squares[i].style.backgroundColor = color;
        }
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    var arr = [];

    for (var i = 0; i < number; i++) {
        arr.push(randomColor())

    }

    return arr;
}

function randomColor () {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    return "rgb("+ randomRed +", " + randomGreen + ", " + randomBlue +")";

}
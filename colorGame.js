var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
]

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');

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
        squares[i].style.backgroundColor = color;
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
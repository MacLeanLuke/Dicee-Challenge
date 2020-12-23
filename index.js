// create randomized dice image for dice 1

var randomNumber1 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // random image of dice between dice1 and dice6

var randomImageSource1 = "images/" + randomDiceImage1; // concatonate the folder to the image name to provide path to image

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

// create randomized dice image for dice 2

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // random image of dice between dice1 and dice6

var randomImageSource2 = "images/" + randomDiceImage2; // concatonate the folder to the image name to provide path to image

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 is a BOSS!"
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 is a BOSS!🏆"
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Draw Yo! 😎"
}

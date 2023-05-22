var randamNumber1 =Math.floor(Math.random() * 6)+ 1; //why add +1 becouse are computer count only 1 to 5 that by we want to also include the 6 so we add.

var randamDiceImage ="dice" + randamNumber1 + ".png";

var randamImageSource = "images/" + randamDiceImage;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randamImageSource);


 var randamNumber2 = Math.floor(Math.random() * 6) + 1;

 var randamImageSource2 = "images/dice" + randamNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randamImageSource2);

 if(randamNumber1>randamNumber2){
     document.querySelector("h1").innerHTML =" 😀 player 1 win!"
 } else if(randamNumber2> randamNumber1) {
  document.querySelector("h1").innerHTML ="player 2 win! 😀"
 } else {
  document.querySelector("h1").innerHTML ="draw!";
 }
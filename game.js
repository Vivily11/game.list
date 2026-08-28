let numberToGuess= Math.round(Math.random()*100);
let tries= 0;

function guess(){
tries=tries+1;
displayTries.innerHTML="Versuche: " + tries;
if (numberToGuess == myNumber.value) {
  headline.innerHTML = "Du hast gewonnen! :)";
  } 
else if (numberToGuess > myNumber.value) {
  headline.innerHTML = "Die Zahl ist größer!";
  }
else if (numberToGuess < myNumber.value) {
  headline.innerHTML = "Die Zahl ist kleiner!";
}
myNumber.value="";
}


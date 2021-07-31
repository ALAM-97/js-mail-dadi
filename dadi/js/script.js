function roll() {
var randomDice = (Math.floor(Math.random() * 6) + 1);
var userDice = (Math.floor(Math.random() * 6) + 1);
document.getElementById("pc-number").innerHTML = randomDice;
document.getElementById("your-number").innerHTML = userDice;
if (userDice > randomDice) {
    document.getElementById("risultato").innerHTML = "HAI VINTO!";
} else if (userDice < randomDice) {
    document.getElementById("risultato").innerHTML = "PAREGGIO!";
} else {
    document.getElementById("risultato").innerHTML = "HAI PERSO!";
}
}
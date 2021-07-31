// 1. chiedi all'utente la sua mail
var userInput = prompt("Inserisci l'email da verificare");
var userInput = userInput.toLowerCase();
// 2. inserisco l'array con le email e controlla che sia nella lista di chi può accedere
var subscribers = ["alessandro@gmail.com", "fabio@gmail.com", "franco@gmail.com", "arianna@gmail.com"];
var emailCheck = false;
for(var i=0; i<=subscribers.length; i++){
    if(userInput==subscribers[i]){
        alert("Bentornato");
        emailCheck= true;
    }
}
if(emailCheck==false){
    alert("La tua email NON è nella lista")
}

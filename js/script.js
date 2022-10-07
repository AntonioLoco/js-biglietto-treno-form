/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

// Input Utente
const userName = document.getElementById("user-name");
console.log(userName);
const userDistance = document.getElementById("user-distance");
console.log(userDistance);
const userAge = document.getElementById("user-age");
console.log(userAge);

// Button
const btnGenerate = document.getElementById("btn-generate");
console.log(btnGenerate);
const btnCancel = document.getElementById("btn-cancel");
console.log(btnCancel);


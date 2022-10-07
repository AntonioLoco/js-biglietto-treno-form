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
const userDistance = document.getElementById("user-distance");
const userAge = document.getElementById("user-age");

// Button
const btnGenerate = document.getElementById("btn-generate");
const btnCancel = document.getElementById("btn-cancel");


// ELABORAZIONE
const priceForKm = 0.21;
let discount = 0;
let priceTicket = 0;


// Quando l'utente vuole generare il biglietto
btnGenerate.addEventListener("click", function(){
    // Calcoliamo il prezzo base
    priceTicket = parseFloat(userDistance.value) * priceForKm;
    console.log(priceTicket);

    // Verifichiamo se l'utente ha diritto allo sconto
    if(userAge.value === "under-age"){
        discount = 0.2;
    } else if(userAge.value === "old-age"){
        discount = 0.4;
    }

    // Calcoliamo il prezzo finale 
    priceTicket -= priceTicket * discount;
    console.log(priceTicket);
});

// Quando l'utente vuole annullare
btnCancel.addEventListener("click", function(){
    userName.value = "";
    userDistance.value = "";
    userAge.value = "";
    discount = 0;
    priceTicket = 0;
});

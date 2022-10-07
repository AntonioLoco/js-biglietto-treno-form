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

// Output Utente
const userNameTicket = document.getElementById("info-name-ticket");
const discountTypeTicket = document.getElementById("info-discount-type");
const numberTrainTicket = document.getElementById("info-number-train");
const infoPriceTicket = document.getElementById("info-price-ticket");
const infoBarcodeTicket = document.getElementById("bar-code-ticket");

// Button
const btnGenerate = document.getElementById("btn-generate");
const btnCancel = document.getElementById("btn-cancel");


// ELABORAZIONE
const priceForKm = 0.21;
let discount = 0;
let priceTicket = 0;
let numberTrain = 0;
let barcodeNumber = 0;

// Quando l'utente vuole generare il biglietto
btnGenerate.addEventListener("click", function(){
    // Controlliamo se l'utente ha inserito i valori
    if(userName.value !== "" && userDistance.value !== ""){

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

        // Generiamo il numero di carrozza
        numberTrain = Math.floor(Math.random() * (7 - 1 + 1) ) + 1;
        console.log(numberTrain);

        // Genero il numero del barcode
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
            barcodeNumber = `${barcodeNumber}${randomNumber}`;
        }
        console.log(barcodeNumber);

        // OUTPUT
        userNameTicket.innerHTML = userName.value;
        numberTrainTicket.innerHTML = numberTrain;
        infoPriceTicket.innerHTML = priceTicket.toFixed(2) + "€";
        infoBarcodeTicket.innerHTML = barcodeNumber;
        
        // Controllo che tipo di biglietto è
        if(discount === 0.2 || discount === 0.4){
            discountTypeTicket.innerHTML = "Biglietto scontato";
        } else{
            discountTypeTicket.innerHTML = "Biglietto standard";
        }
    } else{
        alert("Attenzione!!! Inserire Nome e Cognome e i Km da Percorrere");
    }

});

// Quando l'utente vuole annullare
btnCancel.addEventListener("click", function(){
    userName.value = "";
    userDistance.value = "";
    userAge.value = "";
    discount = "";
    priceTicket = "";
    numberTrain = "";
    barcodeNumber = "";

    // Svuoto l'output
    userNameTicket.innerHTML = "";
    numberTrainTicket.innerHTML = "";
    infoPriceTicket.innerHTML = "";
    infoBarcodeTicket.innerHTML = "";
    discountTypeTicket.innerHTML = "";
});



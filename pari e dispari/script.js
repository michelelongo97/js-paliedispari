//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

// 1 - Creo una funzione che generi un numero casuale tra 1 e 5
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
 }

// 2 - Creo una funzione che sommi il numero generato dalla cpu e e il numero inserito dall'utente
function oddOrEven(sum) {
    if (sum % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

// 3 - Chiedo all'utente di scegliere pari o dispari
const userChoice = prompt("Scrvi 'pari' o 'dispari'");
console.log(userChoice);
// 4 - Controllo se l'utente abbia scritto effettivamente pari o dispari
if (userChoice !== 'pari' && userChoice !== 'dispari'){
    alert("Devi scrivere pari o dispari");
} else {
// 5 - Se la scelta è corretta l'utente inserisce un numero tra 1 e 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);
// 6 - Controllo se il numero inserito è tra 1 e 5
    if (userNumber > 5 || userNumber < 0) {
        alert("Inserisci un numero valido");
    } else {
        // 7 - La cpu genera un numero casuale utilizzando la funzione
        const number = randomNumber();
        console.log(number);
        // 8 - Sommo i due numeri
        const sum = userNumber + number;
        console.log(sum) 
        // 9 - Determino se la somma è pari o dispari utlizzando la funzione
        const sumResult = oddOrEven(sum);
        // 10 - Comunico chi ha vinto
        if (userChoice === sumResult) {
            alert("Hai vinto");
        } else {
            alert("Hai perso")
        }
    }
}

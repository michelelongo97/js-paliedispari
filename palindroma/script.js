//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Consigli del giorno
//1. Scriviamo sempre in italiano i passaggi che vogliamo fare
//2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
//Domande da  farsi quando si crea una funzione:
//1. Come dovrebbe chiamarsi?
//2. Ho bisogno di parametri?
//3. Devo restituire un valore?
//4. Se sì, di che tipo?


// 1 - Creo una funzione che inverte le lettere della parola
function palindroma(word) {
    let wordReverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
    wordReverse = wordReverse + word[i];
    }
    return wordReverse;
}
// 2 - Chiedo all’utente di inserire una parola
const userWord = prompt('Inserisci una parola');
// 3 - Se la parola inserita è palindroma mostro un alert che me lo conferma, altrimenti un alert che mi dice il contrario.
if (userWord === palindroma(userWord)) {
    alert(`La parola inserita è palindroma`);
} else {
    alert(`La parola inserita non è palindroma`);
}
console.log('JS OK');
/* 
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
*/



// Genero 5 numeri random
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
    let getRandomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(getRandomNumber);
}

alert(randomNumbers);



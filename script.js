let numeroUtente = parseInt(prompt("Inserisci un numero"))

if (numeroUtente % 2 === 0) {
    console.log(numeroUtente);
} else {
    console.log("numero successivo a quello inserito = " + (numeroUtente + 1));
}
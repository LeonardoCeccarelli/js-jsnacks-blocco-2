let numeroUtente = parseInt(prompt("Inserisci un numero"))

if (!isNaN(numeroUtente)) {
    if (numeroUtente % 2 === 0) {
        console.log("numero pari = " + numeroUtente);
    } else {
        console.log("numero successivo a quello inserito = " + (numeroUtente + 1));
    }
} else {
    alert("numero inserito non valido")
}
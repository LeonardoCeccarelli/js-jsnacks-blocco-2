// const array1 = [15, 2, 7];
// const array2 = [5];

const array1 = ['ciao'];
const array2 = ['hola', 'hello'];

let bigArray = ""
let shortArray = ""

if (array1.length === array2.length) {
    console.log("i due array hanno lo stesso numero di elementi");
} else if (array1.length > array2.length) {
    bigArray = array1
    shortArray = array2
} else {
    bigArray = array2
    shortArray = array1
}

console.log(`l'array più corto ha ${shortArray.length} elementi`);
console.log(`l'array più lungo ha ${bigArray.length} elementi`);
console.log("--------------------------------------");


// Chiedo all'utente di inserire un numero all'array con meno
// valori fino a quando i deu array non 
// avranno gli stessi valori

while (shortArray.length < bigArray.length) {

    console.log(`l'array corto prima di aggiungere un ulteriore valore ha ${shortArray.length} elementi`);

    const elementoUtente = prompt("Inserisci un elemento")

    shortArray.push(elementoUtente)

    console.log(`l'array corto con l'elemento inserito dall'utente ha ora ${shortArray.length} elementi`);
}

console.log("--------------------------------------");

console.log("lunghezza finale = " + array1.length);
console.log("lunghezza finale = " + array2.length);


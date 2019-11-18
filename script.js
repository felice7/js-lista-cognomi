var cognome = ["Marino", "Bruno", "Bianchi", "Rossi"];
console.log(cognome);
//database dei cognomi


var inserire_cognome = prompt('Inserisci cognome');
console.log(inserire_cognome);
//immissione cognome da inserire nel database


cognome.push(inserire_cognome);
console.log(cognome);
//inserimento cognome nel database

cognome.sort();
console.log(cognome);
//lista ordinata alfabeticamente


var i = 0;
do {
    if (cognome[i] == inserire_cognome) {
    }
    i++;
} while (cognome[i] != inserire_cognome);
console.log("La tua posizione e' al numero " + (i +1) + " della lista");
//ciclo che indica il numero della posizione nel database

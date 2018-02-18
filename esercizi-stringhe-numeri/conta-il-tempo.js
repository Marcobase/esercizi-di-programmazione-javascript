/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
var time =60000; // marco
var time2=(time/60);
var time3=(time2/60);
var ora= Math.round(time3);

console.log(ora);
var time4=(time2%60);
var minuti= Math.round(time4);
console.log(minuti);
var secondi=(time%60);
console.log(secondi);

var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var costo = 0.21;
var prezzoPieno = chilometri * costo;
var scontoUnder = (prezzoPieno - (prezzoPieno * 0.2));
var scontoOver = (prezzoPieno - (prezzoPieno * 0.4));
if (isNaN(chilometri) || isNaN(eta)){
  document.getElementById("biglietto").innerHTML = "Impossibile visualizzare biglietto. Non hai inserito dei numeri. Riprova";
} else {
  if (eta <= 18){
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + ((scontoUnder).toFixed(2)) + " euro";
  } else if (eta >= 65){
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + ((scontoOver).toFixed(2)) + " euro";
  }
  else{
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + (prezzoPieno.toFixed(2)) + " euro";
  }
}

var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var costo = 0.21;
if (isNaN(chilometri) || isNaN(eta)){
  document.getElementById("biglietto").innerHTML = "Impossibile visualizzare biglietto. Non hai inserito dei numeri. Riprova";
} else {
  if (eta <= 18){
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + ((chilometri * costo) * 0.8 + " euro");
  } else if (eta >= 65){
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + ((chilometri * costo) * 0.6) + " euro";
  }
  else{
    document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è " + (chilometri * costo) + " euro" ;
  }
}

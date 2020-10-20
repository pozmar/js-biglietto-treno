var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));
var costo = 0.21;
var under = eta < 18;
var over = eta > 65;
var totaleUnder = (under * costo) * 0.8;
var totaleOver = (over * costo) * 0.6;
if (isNaN(chilometri) || isNaN(eta)){
  document.getElementById("biglietto").innerHTML = "Impossibile visualizzare biglietto. Non hai inserito dei numeri. Riprova";
} else {
  if (eta < 18){
    document.getElementById("biglietto").innerHTML = ((chilometri * costo) * 0.8);
  } else if (eta > 65){
    document.getElementById("biglietto").innerHTML = ((chilometri * costo) * 0.6);
  }
  else{
    document.getElementById("biglietto").innerHTML = chilometri * costo;
  }
}

//variabili base
var costo = 0.21;
var scontoUnder = 20;
var scontoOver = 40;
var chilometri = document.getElementById("percorso");
var nameSurEl = document.getElementById("nameSur");
//bottone
var bottone = document.getElementById("generate");
//funzione bottone
bottone.addEventListener("click", function(){
  var chilometri = document.getElementById("percorso").value;

  var nameSurEl = document.getElementById("nameSur").value;
  var discountEl = document.getElementById("sconto").value;

document.getElementById("name").innerHTML = nameSurEl;
//carrozze e codice
var carrozza = Math.floor(Math.random() * 10) + 1;
document.getElementById("coach").innerHTML = carrozza;
var codice = Math.floor(Math.random()* 999999) + 90000;
document.getElementById("code").innerHTML = codice;
//calcolo prezzi
var prezzoPieno = chilometri * costo;

if (isNaN(chilometri)){
  alert("Impossibile visualizzare biglietto. Non hai inserito dei numeri. Riprova");
} else {
  if (discountEl == "under"){
    document.getElementById("ticket").innerHTML = (prezzoPieno - (prezzoPieno * scontoUnder) / 100).toFixed(2) + "&euro;";
    document.getElementById("discount").innerHTML = "Sconto minorenne";
  } else if (discountEl == "over"){
    document.getElementById("ticket").innerHTML = (prezzoPieno - (prezzoPieno * scontoOver) / 100).toFixed(2) + "&euro;";
    document.getElementById("discount").innerHTML = "Sconto over";
  }
  else{
    //document.getElementById("tabella").style.display = "block";
    document.getElementById("ticket").innerHTML = prezzoPieno.toFixed(2) + "&euro;";
    document.getElementById("discount").innerHTML = "Nessuno sconto applicato";
  }

}
document.getElementById("name").style.fontWeight = "bold";

});
document.getElementById("clear").addEventListener("click", function(){

  nameSurEl.value = "";
  chilometri.value = "";
})

var btnGenerazione = document.getElementById('genera');
var btnAnnullamento = document.getElementById('annulla');

btnGenerazione.addEventListener("click", function(){
    var anagrafica = document.getElementById('anagrafica').value;
    var kilometri = document.getElementById('kilometri').value;
    var eta = document.getElementById('eta').value;
    var errore = document.getElementById('errore-anagrafica');




    var numeri = RegExp('[0-9]' );
    var carSpec = RegExp('[!@#$%^&*()+=,./{}|:<>?]');

    while((numeri.test(anagrafica) == true) || (carSpec.test(anagrafica) == true) || anagrafica == ''){
       errore.innerHTML = "ERRORE RIPROVA!";
       return;
    }

    errore.innerHTML = "";

    var prezzoNoSconto = kilometri * 0.21 ;
    var scontoMinori = prezzoNoSconto * 20 / 100;
    var scontoOver = prezzoNoSconto * 40 / 100;
    var prezzoFinale = prezzoNoSconto;

    if (eta == 'Maggiorenne') {
        prezzoFinale = prezzoNoSconto - scontoMinori;
        document.getElementById('sconto').innerHTML = "Sconto Maggiorenne"
    } else if (eta == 'Over65')  {
        prezzoFinale = prezzoNoSconto - scontoOver;
        document.getElementById('sconto').innerHTML = "Sconto Silver";
    }  else {
        document.getElementById('sconto').innerHTML = "No Sconto";
    }


    document.getElementById('nome-pass').innerHTML = anagrafica;
    // document.getElementById('sconto').innerHTML = anagrafica;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (10 - 1)) + 1;
    document.getElementById('codcp').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;
    document.getElementById('costo').innerHTML = prezzoFinale.toPrecision(3) + '€';

}
);

btnAnnullamento.addEventListener("click", function(){
    location.reload();
}
);





































// var nomeUtente = prompt('ciao visitatore, inserisci il nome');
// document.getElementById('nome').innerHTML = nomeUtente;
// var utente = document.getElementById('nome');
// // utente.classList.add('red');
// // utente.className = 'red';

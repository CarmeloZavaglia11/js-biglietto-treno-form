var btnGenerazione = document.getElementById('genera');
var btnAnnullamento = document.getElementById('annulla');
var btnTemplate = document.getElementById('btn-template');
var template = document.getElementById('template').value = 'Default';


btnGenerazione.addEventListener("click", function(){

    var anagrafica = document.getElementById('anagrafica').value;
    var kilometri = document.getElementById('kilometri').value;
    var eta = document.getElementById('eta').value;
    var errore = document.getElementById('errore-anagrafica');
    var ticket = document.getElementById('ticket');

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

    if (eta == 'Minorenne') {
        prezzoFinale = prezzoNoSconto - scontoMinori;
        document.getElementById('sconto').innerHTML = "Sconto Minorenne"
    } else if (eta == 'Over65')  {
        prezzoFinale = prezzoNoSconto - scontoOver;
        document.getElementById('sconto').innerHTML = "Sconto Silver";
    }  else {
        document.getElementById('sconto').innerHTML = "No Sconto";
    }


    document.getElementById('nome-pass').innerHTML = anagrafica;
    // document.getElementById('sconto').innerHTML = anagrafica;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (10 - 1)) + 1;
    document.getElementById('codcp').innerHTML = Math.floor(Math.random() * (99999 - 90000)) + 90000;
    document.getElementById('costo').innerHTML = prezzoFinale.toPrecision(3) + '€';

    ticket.className = 'ticket show';

}
);

btnAnnullamento.addEventListener("click", function(){
    document.getElementById('anagrafica').value = '';
    document.getElementById('kilometri').value = '';
}
);


btnTemplate.addEventListener("click", function(){
    var template = document.getElementById('template').value;

    var scren = document.getElementById('scren');

    if (template == 'Default') {
        scren.className = 'screen default';
    }  else if (template == 'Flower') {
        scren.className = 'screen flower';
    }  else if (template == 'Lion') {
        scren.className = 'screen lion';
    }  else if(template == 'Water'){
        scren.className = 'screen water';
    }
}
);

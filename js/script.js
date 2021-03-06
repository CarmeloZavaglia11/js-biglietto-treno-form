var btnGenerazione = document.getElementById('genera');
var btnAnnullamento = document.getElementById('annulla');
var btnTemplate = document.getElementById('btn-template');
var template = document.getElementById('template').value = 'Default';


btnGenerazione.addEventListener("click", function(){

    var anagrafica = document.getElementById('anagrafica').value;
    var kilometri = document.getElementById('kilometri').value;
    var eta = document.getElementById('eta').value;
    var erroreanag = document.getElementById('errore-anagrafica');
    var erroreKm = document.getElementById('errore-km');
    var ticket = document.getElementById('ticket');

    var numeri = RegExp('[0-9]' );
    var carSpec = RegExp('[!@#$%^&*()+=,./{}|:<>?]');

    while((numeri.test(anagrafica) == true) || (carSpec.test(anagrafica) == true) || anagrafica == ''){
       erroreanag.innerHTML = "ERRORE RIPROVA!";
       return;
    }

    while((numeri.test(kilometri) == false) || (carSpec.test(kilometri) == true) || kilometri == ''){
       erroreKm.innerHTML = "ERRORE RIPROVA!";
       return;
    }


    erroreanag.innerHTML = "";
    erroreKm.innerHTML = "";

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

    ticket.className = 'ticket show clearfix';

}
);

btnAnnullamento.addEventListener("click", function(){
    var ticket = document.getElementById('ticket');
    document.getElementById('anagrafica').value = '';
    document.getElementById('kilometri').value = '';
    ticket.className = 'ticket hidden clearfix';
}
);


btnTemplate.addEventListener("click", function(){
    var template = document.getElementById('template').value;

    var scren = document.getElementById('scren');

    // variante if(non consigliata)

    // if (template == 'Default') {
    //     scren.className = 'screen default';
    // }  else if (template == 'Flower') {
    //     scren.className = 'screen flower';
    // }  else if (template == 'Lion') {
    //     scren.className = 'screen lion';
    // }  else if(template == 'Water'){
    //     scren.className = 'screen water';
    // }

    // variante switch(ideale)

    switch (template) {
        case 'Flower':
            scren.className = 'screen flower';
            break;
        case 'Lion':
            scren.className = 'screen lion';
            break;
        case 'Water':
            scren.className = 'screen water';
            break;
        default:
            scren.className = 'screen default';
    }
}
);

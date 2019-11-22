var broj = prompt("Unesite broj", 10);
//console.log(ime);
//alert("Dobrodosli " + ime);
function pozdravi(a){
    console.log("Dobrodosli " + a);
}

//pozdravi(ime);

function kvadratBroja(prviBroj){
    var rezultat = prviBroj * prviBroj;
    console.log("Kvadrat izabranog broja "+broj+" je "+rezultat);
    console.log(rezultat);
}

//kvadratBroja(broj);

function saberiBrojeve(prvi, drugi, treci){
    var zbir = prvi + drugi + treci;
    return zbir;
}

var ukupno = saberiBrojeve(10,20,30);
console.log(ukupno);

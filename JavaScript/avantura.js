alert('Zombi Apokalipsa')
alert('Nalazite se u napustenoj prodavnici i pretrazujete okolinu za necim korisnim')
alert('U tom trenutku ulazi zombi na vrata');

var oruzje = prompt('Gledate oko sebe i uocavate tri vrste oruzja. Birajte: sipku, noz ili gumenu patku');

var vrednost = Math.round(Math.random());
//Math.random() * 6 , tada ce imati 5 funkcija

if(vrednost === 0){
    alert('Zamahujete sa ' + oruzje + ' ali promasujete')
}else{
    alert('Zamahujete sa ' + oruzje + ' i pogadjate zombija')
}


function soma(){
	var x=1;
	var y=2;
	console.log(x+2);
}

//soma();

function somaPar(x,y){
	var r = x+y;
	console.log(r);
}

function mult(n, o){
	var resultado = (n * o); //são variáveis locais
	console.log(resultado);
}

function pot(n,o){
	var resultado = Math.pow(n,o); //eleva um numero pelo outro
	console.log(resultado);
}

mult(3,4);
pot(7,2);

//somaPar(4, 9);

/*
(function respostaF(){ //esses parentesses a mais executama função sem chamar, q é o var d ali em baixo seguido de um console.log
	var nome="Marcelo";
	alert(nome);
	return nome;
})();

//respostaF();

//var d = respostaF();

*/
/*
var f = function(){ //função anônima, chamada por f
	alert("Função sem nome");
}

f(); //isso é pro navegador ler a varivável;
*/

//var ar = ()=>{alert("Arfunc")} //essa é uma arrow function
//ar();

(()=>{alert("Arfunc")})(); //essa é uma arrow function de autoexecução;




/*
1ª Aula de Js - 16/08/2021
*/

// Variáveis
/*
var nome = "Mateus"; // esse nome é uma string. javascript não obriga o ponto e vígula, mas ele permite criar outra variável a frente

console.log(nome); 
console.log(typeof(nome));

var nome = 12; // number
console.log(typeof(nome));


//concaternar valores/string
document.write("Idade" + nome  + "<br>");
*/

var fruta = "Laranja";
var oque = "doce";
var tudoJunto = fruta+" "+oque;
//console.log(fruta+" "+doce);
//console.log(tudoJunto);

//var valor1 = parseInt('1'); //parseInt transforme string em inteiro;
var valor1 = '2';
var valor2 = 2;
var total = valor1 + valor2;

document.write(total); //saindo no html
console.log(valor1 - valor2); //console do navegador

var i = 2;
var j = 3;

console.log(i%j) //modulo

var x = 3;
var y = 2;

console.log(x*y); //multiplicação

//compareadores
var v = (valor1 == valor2); //se é igual, mas não exatamente igual, não difere numero de string
console.log(v);

var v = (valor1 === valor2); //exatamente igual
console.log(v);
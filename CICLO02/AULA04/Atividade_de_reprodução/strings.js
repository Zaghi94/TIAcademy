/*var nome="Marcelo";

console.log(nome.length);
console.log(nome[0]);*/

/*match()
O método match procura uma palavra em uma string. flags g / i / m
*/

var palavras = "Maçã doce";

	//console.log(palavras.match(/D/gi)); //D entre barras vai ser procurado - g procura de modo global, i ignora a formatação D ou d

/*search()
O método search() procura pela ocorrência e retorna
a posição na cadeia de string, a posição é em relação ao primeiro caractere da ocorrência.
*/
//console.log(palavras.search(/D/gi)) //retorna a posição 5 da letra

/*replace() - substitui uma string por outra*/

/*var str = "Lorem ipsum dolor sit amet consectetur adipisicing "+ 
"elit. Consequuntur possimus fugiat"

var mudarStr = str.replace(/e/gi,'X');

console.log(mudarStr);*/


/*localeCompare()
compara duas srtrings e retorna 0 se forem iguais, -1 e 1 se dorem diferentes
*/
/*
var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

console.log(`Este é o c1: ${c1}. Este é o c2: ${c2}`)

var comparacao = c1.localeCompare(c2);
console.log(comparacao);
*/

/*trim()
Remove espaços antes e depois das strings.*/
/*
var p = "   fpalavra+ ";
console.log(p);
var r=p.trim();
console.log(r);
var s=r.replace(/f/gi,'');
console.log(s)
sub_a=s.replace('+',''); //remover o sinal de + por substituição
console.log(sub_a)
console.log(`Removido: ${sub_a}`);
*/
//toLocaleString - formata moedas

var valor = 1.357 //1,35;
var formatarmoeda = valor.toLocaleString('pt-BR',{ //essa linha arredonda e troca o ponto por vírgula
	style: 'currency',//essas duas linhas colocam o símbolo do real
	currency:'BRL'

})
console.log(formatarmoeda)

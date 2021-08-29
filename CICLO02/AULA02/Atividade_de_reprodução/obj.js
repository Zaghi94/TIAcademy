/*
	var / let const
*/

/*
var nome="marcelo"; //var global
let sobreNome = "weihmayr";
if(true){
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobrenome " + sobreNome);
	let sn = "Da Silva";
	console.log(sobreNome);
}

console.log("O nome do professor é "+ nm +" "+ sobreNome+" "+sn);
console.log("Var nome= "+ nm);
*/

var Pessoa = {
		nome: "Marcelo",
		rua: "Rua lá",
		ncasa: "777",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. cas...:"+this.ncasa+"<br>")
	}
}

console.log("Nome "+Pessoa.nome+
			" Endereço "+Pessoa.rua+" Número: "+Pessoa.ncasa);
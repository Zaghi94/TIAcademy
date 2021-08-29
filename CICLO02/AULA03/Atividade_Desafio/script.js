window.onload = () =>{

const valor1 = document.querySelector("#v1");
const valor2 = document.querySelector("#v2");
const valor3 = document.querySelector("#v3");
const btnTeste = document.querySelector("#teste");

btnTeste.addEventListener('click',()=>{	
	var cx1= Number(valor1.value);
	var cx2= Number(valor2.value);
	var cx3= Number(valor3.value);
	var r = cx1 + cx2;
	if (r == cx3){
		alert("Parabéns, a soma está certa!")
	} else{
		alert("Oh no, a soma está errada!")
	}
})
}
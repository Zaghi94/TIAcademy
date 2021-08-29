window.onload=function(){
	const pai = document.querySelectorAll("#pai");
	pai.forEach((pegarFilhas)=>{

		pegarFilhas.addEventListener('click',(filha)=>{

			alert(filha.target.textContent);
		})

	})


	const btn=document.querySelector("#btn");
	const outroPai = document.querySelector("#outroPai");
	var i=0;
	btn.addEventListener('click',()=>{

		li = document.createElement("li");
		outroPai.appendChild(li).textContent = "Elemento Filho " +i;
		li.setAttribute("class", "ItemL");
		i++;
	});

	const paiDaLista = document.querySelectorAll("#outroPai");
	paiDaLista.forEach(listaDeFilhas=>{
		listaDeFilhas.addEventListener('click',(filhas)=>{
			alert(filhas.target.textContent);
		})
	})
}
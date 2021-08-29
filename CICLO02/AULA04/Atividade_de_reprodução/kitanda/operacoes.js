window.onload=function(){
//produtos
	(()=>{

		let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos") //> fez a referenci da div produtos dentro de content produtos

		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML += `<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		}


	})(produtos)

//compra
var totalPedido =0;

const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

const cestadoCliente = document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const armazenaItens=[];//linha vazia



itemProduto.forEach((item)=>{
	item.addEventListener('click',()=>{
		//alert("lista")
		li = document.createElement("li");
		if(armazenaItens.indexOf(item.textContent) == -1){ //-1 significa que o elemento não existe na lista
			armazenaItens.push(item.textContent);
			cestadoCliente.appendChild(li).textContent = item.textContent;
			totalPedido += Number(item.dataset.preco);
			mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',{style: 'currency', currency:"BRL"})
		}else{
			alert(`O item "${item.textContent}" já está na lista`)
		}
	})
})
const remProduto = document.querySelectorAll("#cestaDoCliente > li");
///desafio: clicar na cesta e perghuntar se quer remover o produto e removê-lo



}
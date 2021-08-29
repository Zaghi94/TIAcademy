const express=require('express');
const cors=require('cors');

const models=require("./models"); //chama o que está na pasta models

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.cliente; //cria uma variavel cliente que está associada com as classes (obj) em models
let produto=models.produto;
let servico=models.servico;

app.get('/', function(req,res){
    res.send('Olá mundo!'); // get sempre pega resposta
});

app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Mateus Antonio Zaghi",
        endereco: "Rua imaginária, 1000",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "19940411"
    });
    res.send('Novo cliente inserido'); // get sempre pega resposta
});

app.get('/pedidos', function(req,res){
    res.send('Lista de pedidos:'); // get sempre pega resposta
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send("Serviço foi inserido!");
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});
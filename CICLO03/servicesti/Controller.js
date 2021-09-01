const express=require('express');
const cors=require('cors');

const models=require("./models"); //chama o que está na pasta models

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente; //cria uma variavel cliente que está associada com as classes (obj) em models
let pedido=models.Pedido; //cria a variável pedido  relacionada ao obj pedido
let servico=models.Servico;

app.post('/', function(req,res){
    res.send('Olá mundo!'); // get sempre pega resposta
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(//{
        //nome: "Mateus Antonio Zaghi",
        //endereco: "Rua imaginária, 1000",
        //cidade: "Maringá",
        //uf: "PR",
        //nascimento: "19940411"
        req.body
    //}
    );
    res.send('Novo cliente inserido'); // get sempre pega resposta
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido Inserido!'); // get sempre pega o que está no código, post, posta no servidor
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
    //let create=await servico.create({
       // nome: "Aula de backend",
       // descricao: "Aprendendo backend com node js"
        req.body
    );
    //});
    res.send("Serviço foi inserido!");
});

app.post('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.post('/ofertas', async(req, res)=>{ //conta a quatidade de servicos
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.post('/servico/:id', async(req,res)=>{ //captura o serviço pelo id, 0, 1, 2, 3...
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});



//Exercício 02: Visualize todos os clientes em ordem de antiguidade:
app.get('/visualizaclientes', async(req, res)=>{
    await cliente.findAll({
        order:[['id']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Exercício 03: Visualize todos os pedidos:
app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
        order:[['id', 'DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//Exercício 04: Visualize o pedido por ordem a partir do maior valor:
app.get('/ordenapedidos', async(req, res)=>{
    await pedido.findAll({
        order:[['valor', 'DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//Exercício 05: Informe quantos clientes estão na nossa base de dados
app.get('/quantidadeclientes', async(req, res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});

//Exercício 06: Informe a quantidade de pedidos solicitados:
app.get('/quantidadepedidos', async(req, res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
});


let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});
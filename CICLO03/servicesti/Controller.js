const express = require('express');
const cors = require('cors');

const models = require("./models"); //chama o que está na pasta models

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente; //cria uma variavel cliente que está associada com as classes (obj) em models
let pedido = models.Pedido; //cria a variável pedido  relacionada ao obj pedido
let servico = models.Servico;

app.get('/', function (req, res) {
    res.send('Olá mundo!'); // get sempre pega resposta
});

app.get('/clientes', async (req, res) => {
    let create = await cliente.create(//{
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

app.get('/pedidos', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Pedido Inserido!'); // get sempre pega o que está no código, post, posta no servidor
});

app.post('/servicos', async (req, res) => {
    await aguardar(2000);
    function aguardar(ms){
        return new Promise((resolve) => {
            setTimeout(resolve,ms);
        });
    };

    await servico.create(
        req.body
    ).then(() => {
        return res.json({
            type: 'success',
            message: 'Serviço inserido com sucesso!'
        });
    }).catch(function (erro) {
        return res.status(400).json({
            type: 'error',
            message: "Não foi possível cadastrat o serviço!"
        });
    });

});

app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function (servicos) {
        res.json({ servicos })
    });
});

app.get('/ofertas', async (req, res) => { //conta a quatidade de servicos
    await servico.count('id')
        .then(function (servicos) {
            res.json(servicos);
        });
});

app.get('/servico/:id', async (req, res) => { //captura o serviço pelo id, 0, 1, 2, 3...
    servico.findByPk(req.params.id)
        .then(servico => {
            return res.json({
                error: false,
                servico
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Código não está cadastrado!"
            });
        });
});

//AULA 31/08 INICIA AQUI:

app.get('/atualizaservico', async (req, res) => {
    await servico.findByPk(1)
        .then(servico => {
            servico.nome = 'HTML/CSS/JS';
            servico.descricao = 'Páginas estáticas e dinâmicas estilizadas';
            servico.save();
            return res.json({ servico });
        });
});

app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            eror: true,
            message: "Erro na alteração de serviço!"
        });
    });
});

app.get('/servicospedidos', async (req, res) => {
    await servico.findByPk(1, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico });
    });
});

app.put('/editarpedido02', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            erro: false,
            message: "Pedido modificado"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido!"
        });
    });
});

///ABAIXO ESTÃO OS EXERCÍCIOS DO DIA 31/08

// Exercício 01: Faça uma busca por serviços de clientes passando o id do cliente no corpo da requisição:

app.get('/listapedidos/:id', async (req, res) => {
    await pedido.findAll({ where: { Clienteid: [req.params.id] } })
        .then(function (pedidos) {
            res.json(pedidos)
        });
    console.log
});

// Exercício 02: Utilize a rota para consultar clientes e faça a edição de um cliente pelo método put

app.put('/editarcliente', (req, res) => {
    cliente.update(req, body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar serviço!"
        })
    })
})

// Exercício 03: Utilize uma rota para consultar pedidos e faça a edição de um pedido pelo método put

app.put('/editarpedido03', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao modificar o pedido!"
        });
    });
});



///ABAIXO ESTÃO OS EXERCÍCIOS DO DIA 30/08

//Exercício 01: Visualize todos os clientes:
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        order: [['nome']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

//Exercício 02: Visualize todos os clientes em ordem de antiguidade:
app.get('/visualizaclientes', async (req, res) => {
    await cliente.findAll({
        order: [['id']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

//Exercício 03: Visualize todos os pedidos:
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});

//Exercício 04: Visualize o pedido por ordem a partir do maior valor:
app.get('/ordenapedidos', async (req, res) => {
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});

//Exercício 05: Informe quantos clientes estão na nossa base de dados
app.get('/quantidadeclientes', async (req, res) => {
    await cliente.count('id')
        .then(function (clientes) {
            res.json(clientes);
        });
});

//Exercício 06: Informe a quantidade de pedidos solicitados:
app.get('/quantidadepedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json(pedidos);
        });
});

//Desafio aula 30/08. Somar os valores dos pedidos de um cliente

app.get('/pedido/:id', async (req, res) => {
    await pedido.sum('valor', { where: { ClienteId: req.params.id } })
        .then((pedido) => {
            return res.json({
                pedido
            });
        });
});

//EXCLUSÃO DE OBJETOS:

app.get('/excluircliente', async (req, res) => {
    cliente.destroy({
        where: { id: 11 }
    });
});

app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente!"
        });
    });
})



//aqui é definida a porta do servidor
let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo');
});
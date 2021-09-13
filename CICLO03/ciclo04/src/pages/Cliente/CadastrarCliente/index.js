import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade:'',
        uf:'',
        nascimento:''
    });

    const[status, setStatus] = useState({
        formSave:false,
        type:'',
        message:''
    });

    const valorInput = e => setCliente({
        ...cliente,[e.target.name]:e.target.value //os 3 pontinhos retorna todos os objetos do pedido
    });

    const cadCliente = async e => {
       // console.log(servico);
        e.preventDefault();
        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type':'application/json' //o cabeçalho recebe o json que tem sempre chave e valor
        }

        await axios.post(api + "/clientes02", cliente,{headers}) //headers são os dados que estou enviando
        .then((response) => {
            if(response.data.error){
                setStatus({
                    formSave:false,
                    type:'error',
                    message: response.data.message
                })
            }else{
                setStatus({
                    formSave:false,
                    type:'sucess',
                    message: response.data.message
                })
            }
           // console.log(response.data.message); //apresenta uma mensagem após inserir um serviço
        })
        .catch(() => {
            setStatus({
                formSave:false,
                type:'error',
                message: "Erro: Não foi possível se conectar a API"
            })
            //console.log("Erro: Não foi possível se conectar a API")
        });
    };


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastrar Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente"
                            className="btn btn-outline-success 
                                btn-sm">
                            Listar
                        </Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert>:""}
                {status.type === 'sucsess' ? <Alert color="success"> {status.message}</Alert>:""}

                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" onChange={valorInput}/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço do Cliente" onChange={valorInput}/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade do Cliente" onChange={valorInput}/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Estado</Label>
                        <Input type="text" name="uf" placeholder="UF do Cliente. Ex: PR" onChange={valorInput}/>
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="AAAA-MM-DD" onChange={valorInput}/>
                    </FormGroup>

                    {status.formSave ? <Button type="submit" outline-color="info" disabled>Salvando...<Spinner size="sm" color="info" /></Button>:<Button type="submit" outline-color="info">Cadastrar</Button>}
                    <Button type="reset" outline color="success" className="m-1">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}
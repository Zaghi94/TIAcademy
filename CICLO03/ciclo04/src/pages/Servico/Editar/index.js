import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api } from '../../../config';


export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });
    
    const edtServico = async e =>{
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave: true,
        })

        const headers ={
            'Content-Type':'application/json'
        }

        await axios.put(api+'/editarservico', {id, nome, descricao}, {headers})
            
            .then((response)=>{
                console.log(response.data.error);
                console.log(response.data.message);
                setStatus({
                    formSave: false
                })
                
            })
            .catch(()=>{
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    };

    useEffect(() =>{
        const getServico = async () =>{
            await axios.get(api + "/servico/" + id)
            .then((response)=>{
                setNome(response.data.servico.nome);
                setDescricao(response.data.servico.descricao);
            })
            .catch(()=>{
                console.log("Erro: Não foi possível conectar a API.")
            })
        }
        getServico();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um Serviço</h1>
                    </div>
                    <div>
                        <Link to="/visualizarservico" className="btn btn-outline-success 
                            btn-sm m-1">Listar</Link>
                        <Link to={"/servico/" + id} className="btn btn-outline-success 
                            btn-sm m-1">Consultar</Link>

                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}

                {status.type === 'sucsess' ? <Alert color="success"> {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Serviço" value={nome}
                        onChange={e =>setNome(e.target.value)}/>
                    </FormGroup>
                    
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" value={descricao} 
                        onChange={e =>setDescricao(e.target.value)}/>
                    </FormGroup>

                    {status.formSave ? <Button type="submit" outline-color="warning" disabled>Salvando...
                        <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline-color="warning">Salvar</Button>}
                        <Button type="reset" outline color="success" className="m-1">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}
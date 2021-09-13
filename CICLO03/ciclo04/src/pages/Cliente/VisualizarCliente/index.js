import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"

import { api } from '../../../config';

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível conectar a API.'
                });
            });
    }

    const apagarCliente = async(idCliente) =>{
        console.log(idCliente);
        const headers={
            'Content-Type':'application/json'
        }
        await axios.delete(api+"/apagarcliente/" + idCliente, {headers})
        .then((response)=>{
            console.log(response.data.error);
            getClientes(); //isso recarrega os servicos
        })
        .catch(()=>{
            setStatus({
                type: 'error',
                message: 'Erro: Não foi possível acessar a API.'
            });
        });

    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-2">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Página de Clientes</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarclientes"
                            className="btn btn-outline-success 
                            btn-sm">
                            Cadastrar
                        </Link>
                    </div>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/"+item.id} 
                                    className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                   <Link to={"/alterarcliente/"+item.id} 
                                    className="btn btn-outline-success btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                    onClick={()=>apagarCliente(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
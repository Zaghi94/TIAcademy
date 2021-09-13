import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Clientevz = (props) => {
    //console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    //console.log(response.data.servico);
                    setData(response.data.cliente);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Sem conexão com a API.'
                    })
                    //console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Página do Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente" className="btn btn-outline-success 
                            btn-sm m-1">Listar</Link>
                        <Link to={"/alterarcliente/"+data.id} 
                         className="btn btn-outline-success btn-sm m-1">Editar</Link>
                    </div>
                </div>
                <hr className="m-1"/>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <div>
                    <dl className="row">
                        <dt className="col-sm-3">Nome</dt>
                        <dd className="col-sm-3">{data.nome}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Endereço</dt>
                        <dd className="col-sm-3">{data.endereco}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Cidade</dt>
                        <dd className="col-sm-3">{data.cidade}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">UF</dt>
                        <dd className="col-sm-3">{data.uf}</dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-sm-3">Nascimento</dt>
                        <dd className="col-sm-3">{data.nascimento}</dd>
                    </dl>
                </div>
            </Container>
        </div>
    )
}
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {
    //console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    //console.log(response.data.servico);
                    setData(response.data.servico);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Sem conexão com a API.'
                    })
                    //console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico" className="btn btn-outline-success 
                            btn-sm m-1">Listar</Link>
                        <Link to={"/editarservico/"+data.id} 
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
                        <dt className="col-sm-3">Descrição</dt>
                        <dd className="col-sm-3">{data.descricao}</dd>
                    </dl>
                </div>
            </Container>
        </div>
    )
}
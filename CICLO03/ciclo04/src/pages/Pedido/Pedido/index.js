import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const ConsultaPedido = (props) => {

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getPedidos = async () => {
            await axios.get(api + '/pedido/' + id)
                .then((response) => {
                    setData(response.data.pedido);
                    console.log(response.data.pedido);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getPedidos();
    }, [id]);

    return (

        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Página do Pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido"
                            className="btn btn-outline-success btn-sm m-1" >Listar</Link>
                            <Link to={"/editarpedido/"+data.id}
                            className='btn btn-outline-success btn-sm m-1'>Editar</Link>
                    </div>
                </div>

                <hr className="m-1"/>
                <dl className="row">
                    <dt className="col-sm-3">ID</dt>
                    <dd className="col-sm-9">{data.id}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">ID do Cliente</dt>
                    <dd className="col-sm-9">{data.ClienteId}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">ID do Serviço</dt>
                    <dd className="col-sm-6">{data.ServicoId}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Valor</dt>
                    <dd className="col-sm-6">{data.valor}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Data</dt>
                    <dd className="col-sm-6">{data.data}</dd>
                </dl>
            </Container>
        </div>

    )
}
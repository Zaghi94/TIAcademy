import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente'
import { Menu } from './components/Menu';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import {Servico} from './pages/Servico/Servico'
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import { EditarCliente } from './pages/Cliente/EditarCliente';
import { Clientevz } from './pages/Cliente/Cliente';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { ConsultaPedido } from './pages/Pedido/Pedido';
import { EditarPedido } from './pages/Pedido/EditarPedido/Index';



function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/cliente/:id" component={Clientevz}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/editarservico/:id" component={Editar}/>
          <Route path="/cadastrarclientes" component={CadastrarCliente}/>
          <Route path="/alterarcliente/:id" component={EditarCliente}/>
          <Route path="/cadastrarpedidos" component={CadastrarPedido}/>
          <Route path="/listapedidos" component={ConsultaPedido}/>
          <Route path="/pedido/:id" component={ConsultaPedido}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

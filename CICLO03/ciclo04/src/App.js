import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente'
import {Cliente} from './pages/Cliente';
import {Pedido} from './pages/Pedido';
import { Menu } from './components/Menu';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import {Servico} from './pages/Servico/Servico'


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/cliente" component={Cliente}/>
          <Route path="/pedido" component={Pedido}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

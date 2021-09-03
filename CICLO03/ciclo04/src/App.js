import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente'
import {Cliente} from './pages/Cliente';
import {Pedido} from './pages/Pedido';
import {Servico} from './pages/Servico';
import { Menu } from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cliente" component={Cliente}/>
          <Route path="/pedido" component={Pedido}/>
          <Route path="/servico" component={Servico}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

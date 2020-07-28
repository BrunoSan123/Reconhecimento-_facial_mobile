import React from 'react';
import Painel from './components/painel/painel'
import Cadastro from './components/cadastro/cadastro'
import  {BrowserRouter,Switch,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Painel}/>
          <Route path="/cadastro" component={Cadastro}/>
        </Switch>
     
      </BrowserRouter>
      
      
    </div>
  );
}




export default App;

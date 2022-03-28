import 'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Rotas from './Rotas';
import Server from './server'


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Menu />
        <Rotas />
        
      </BrowserRouter>

    </>
  );
}

export default App;

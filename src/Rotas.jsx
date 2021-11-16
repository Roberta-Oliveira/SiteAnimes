import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import GenerosForm from './pages/generos/GenerosForm'
import AnimesForm from './pages/melhores2021/AnimesForm'
import LancamentosForm from './pages/lançamentos/LancamentosForm'
import Generos from './pages/generos/Generos'
import Lista from './pages/lista/Lista'
import ListaForm from './pages/lista/ListaForm'
import Inicio from './pages/inicio/Inicio'
import Animes from './pages/melhores2021/Animes'
import ContatoForm from './pages/contato/ContatoForm'


const Rotas = () => {
    return (
        <>
          <Container className="mt-3">
            <Switch>
              <Route exact path="/inicio" component={Inicio} />
              <Route exact path="/listas" component={Lista} />
              <Route exact path="/listas/create" component={ListaForm} />
              <Route exact path="/listas/:id" component={ListaForm} />
              <Route exact path="/generos" component={Generos} />
              <Route exact path="/generos/create" component={GenerosForm} />
              <Route exact path="/generos/:id" component={GenerosForm} />
              <Route exact path="/animes" component={Animes} />
              <Route exact path="/animes/:id" component={AnimesForm} />
              <Route exact path="/animes/create" component={AnimesForm} />
              <Route exact path="/lancamentos" component={LancamentosForm} />
              <Route exact path="/contato" component={ContatoForm} />
            </Switch>
          </Container>
        </>
    )
}

export default Rotas

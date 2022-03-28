import React from 'react'
import { Nav } from 'react-bootstrap'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './animes.png'
import "../App.css"

const Menu = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container> 
            <Navbar.Brand href="/inicio">
                    <img
                        src={logo}
                        width="115,25"
                        height="80,62"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="nav-link" to="/listas">Lista de animes favoritos</Link>
              <Link className="nav-link" to="/animes">Melhores animes 2021</Link>
              <Link className="nav-link" to="/generos">Gêneros</Link>
              <Link className="nav-link" to="/lancamentos">Próximos Lançamentos</Link>
              <Link className="nav-link" to="/contato">Contato</Link>
            
            </Nav>
            </Container>
          </Navbar>
        </>
    )
}

export default Menu

import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import apiAnimes from '../../services/apiAnimes'
import { FaSistrix } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./inicio.style.css";



const Inicio = (props) => {

    const [inicio, setInicio] = useState([])

    useEffect(()=>{

        const id = props.match.params.id

        apiAnimes.get('/available/anime').then( resultado => {
            setInicio(resultado.data)
            console.log(resultado.data);
        })

    }, [props])

    
    return (
        <>
            <h1 className="titulo">Animes Disponíveis</h1>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Animes</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {inicio.map((tipos) => (
                        <tr key={tipos.id} >
                            <td>
                                <Link to={"/tipos/" + inicio.id}>
                                    <FaSistrix />
                                </Link>
                            </td>
                            
                            <td>{tipos}</td>
                          
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Inicio

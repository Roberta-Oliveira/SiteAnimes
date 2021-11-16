import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'



const Inicio = () => {

    const [inicio, setInicio] = useState([])

    useEffect(()=>{

        fetch(
            "https://animechan.vercel.app/api/available/anime"
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.dados);
                setInicio(data.dados);
            });
        }, []);

    
    return (
        <>
            <h1>Animes Disponíveis</h1>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhar</th>
                        <th>Animes</th>
                        <th>Personagem</th>
                        <th>Citação</th>
                    </tr>
                </thead>
                <tbody>
                    {inicio.map((tipos) => (
                        <tr key={inicio.id} >
                            
                            <td>{tipos.anime}</td>
                            <td>{tipos.personagem}</td>
                            <td>{tipos.quote}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Inicio

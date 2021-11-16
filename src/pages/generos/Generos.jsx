import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import GenerosService from '../../services/assistir/GenerosService'

const Generos = () => {

    const [generos, setGeneros] = useState([])

    useEffect(()=> {
        const generos = GenerosService.getAll()
        setGeneros(generos)
    
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            GenerosService.delete(i)
            setGeneros(GenerosService.getAll())
        }
    }

    return (
        <>
            <Box title="Gêneros">
                <Link to="/generos/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Numero</th>
                            <th>Gênero</th>
                            <th>Nome</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos.map((genero, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/generos/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" 
                                    title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>{i}</td>
                                <td>{genero.genero}</td>
                                <td>{genero.nome}</td>
                                <td>{genero.ano}</td>
                            
                            </tr>    
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>    
    )
}

export default Generos
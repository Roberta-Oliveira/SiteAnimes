import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AnimesService from '../../services/assistir/AnimesService'

const Animes = () => {

    const [animes, setAnimes] = useState([])

    useEffect(()=> {
        const animes = AnimesService.getAll()
        setAnimes(animes)
    
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            AnimesService.delete(i)
            setAnimes(AnimesService.getAll())
        }
    }


    return (
        <>
            <Box title="Animes">
                <Link to="/animes/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>


            <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Idiomas</th>
                            <th>Temporadas</th>
                            <th>Notas</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {animes.map((anime, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/animes/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger"
                                    onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{anime.nome}</td>
                                <td>{anime.genero}</td>
                                <td>{anime.idioma}</td>
                                <td>{anime.temporadas}</td>
                                <td>{anime.avaliacao}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Animes

import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcFullTrash } from 'react-icons/fc'
import { RiFileEditLine } from 'react-icons/ri'
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
                <Link to="/animes/create" className="btn btn-light mb-3"> Add <FaPlus /></Link>


            <Table responsive hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
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
                                        <RiFileEditLine title="Editar" />
                                    </Link>
                                    {' '}
                                    <FcFullTrash className="text-danger"
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

import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcFullTrash } from 'react-icons/fc'
import { RiFileEditLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ListaService from '../../services/assistir/ListaService'

const Lista = () => {

    const [listas, setListas] = useState([])

    useEffect(() => {
        const listas = ListaService.getAll()
        setListas(listas)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            ListaService.delete(i)
            setListas(ListaService.getAll())
        }
    }

    return (
        <>
            <Box title="Minha Lista">
                <Link to="/listas/create" className="btn btn-warning mb-3"> Add <FaPlus /></Link>

                <Table responsive hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Assistido</th>
                            
                        </tr>    
                    </thead>
                    <tbody>
                        {listas.map((lista, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/listas/' + i}>
                                        <RiFileEditLine title="Editar" />
                                    </Link>
                                    {' '}
                                    <FcFullTrash className="text-danger"
                                    onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{lista.nome}</td>
                                <td>{lista.genero}</td>
                                <td>{lista.opcao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            
        </>
    )
}

export default Lista

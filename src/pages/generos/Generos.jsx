import React, { useState, useEffect } from 'react'
import { Form, FormControl, Table, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { FcFullTrash } from 'react-icons/fc'
import { RiFileEditLine } from 'react-icons/ri'
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
                <Link to="/generos/create" className="btn btn-primary mb-3"> Add <FaPlus /></Link>
                
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Buscar"
                    />
                    <Button variant="outline-light-success" >Search</Button>
                </Form>
                <br />


                <Table class="table table-bordered table-responsive" data-sortable>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Numero</th>
                            <th>Gênero</th>
                            <th>Nome</th>
                            <th>Ano</th>
                            <th>Idioma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos.map((genero, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/generos/" + i}>
                                        <RiFileEditLine title="Editar" />
                                    </Link>
                                    {' '}
                                    <FcFullTrash className="text-danger" 
                                    title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>{i}</td>
                                <td>{genero.genero}</td>
                                <td>{genero.nome}</td>
                                <td>{genero.ano}</td>
                                <td>{genero.idioma}</td>
                            
                            </tr>    
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>    
    )
}

export default Generos
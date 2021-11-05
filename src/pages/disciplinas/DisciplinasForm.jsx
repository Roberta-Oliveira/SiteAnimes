import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button, Table } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import validador from '../../validators/DisciplinaValidator'
import Box from '../../components/Box'
import DisciplinaService from '../../services/academico/DisciplinaService'


const DisciplinaForm = (props) => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    function enviarDados(dados){
        const id = props.match.params.id
        id ? DisciplinaService.update(dados, id) : DisciplinaService.create(dados)
        props.history.push('/disciplinas')
    }
    
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        const disciplinas = DisciplinaService.getAll()
        setDisciplinas(disciplinas)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            DisciplinaService.delete(i)
            setDisciplinas(DisciplinaService.getAll())
        }
    }

    return (
        <>
            <Box title="Disciplinas">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="curso">
                        <Form.Label column sm={2}>Curso: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("curso", validador.curso)} />
                            {errors.curso && <span className="text-danger">{errors.curso.message}</span>}
                        </Col>
                    </Form.Group>					            
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button> {' '}
                        <Link className="btn btn-danger" to="/disciplinas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>

                <br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplina, i) => (
                            <tr key={i}>
                                <td>
                                    <FaRegTrashAlt className="text-danger"
                                    onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.curso}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default DisciplinaForm 
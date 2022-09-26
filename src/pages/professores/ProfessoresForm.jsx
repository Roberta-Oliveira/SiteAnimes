import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button, Table } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import validador from '../../validators/ProfessorValidator'
import ProfessoresService from '../../services/academico/ProfessoresService'
import { mask, unMask } from 'remask'

const ProfessoresForm = (props) => {

    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function enviarDados(dados){
        const id = props.match.params.id
        id ? ProfessoresService.update(dados, id) : ProfessoresService.create(dados)
        props.history.push('/professores')
    }

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        const professores = ProfessoresService.getAll()
        setProfessores(professores)
    }, [props, setValue])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            ProfessoresService.delete(i)
            setProfessores(ProfessoresService.getAll())
        }
    }

    function handleChange(event){
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }  
   

    return (
        <>
            <Box title="Professores">
                
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cpf", validador.cpf)} mask="999.999.999-99" onChange={handleChange} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="maticula">
                        <Form.Label column sm={2}>Matricula: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("matricula", validador.matricula)} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Col>
                    </Form.Group>		            
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>{ ' ' }
                        <Link className="btn btn-danger" to="/professores"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>

                <br /> 

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Matricula</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {professores.map((professor, i) => (
                            <tr key={i}>
                                <td>
                                    <FaRegTrashAlt className="text-danger"
                                    onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{professor.nome}</td>
                                <td>{professor.cpf}</td>
                                <td>{professor.matricula}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default ProfessoresForm 
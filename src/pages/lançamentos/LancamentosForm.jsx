import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button, Table } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import validador from '../../validators/LacamentosValidator'
import LancamentosService from '../../services/assistir/LancamentosService'
import { mask, unMask } from 'remask'

const LancamentosForm = (props) => {

    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function enviarDados(dados){
        const id = props.match.params.id
        id ? LancamentosService.update(dados, id) : LancamentosService.create(dados)
        props.history.push('/lancamentos')
        console.log(dados);
    }

    const [lancamentos, setLancamentos] = useState([])

    useEffect(() => {
        const professores = LancamentosService.getAll()
        setLancamentos(professores)
    }, [props, setValue])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            LancamentosService.delete(i)
            setLancamentos(LancamentosService.getAll())
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
            <Box title="Lançamentos">
                
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="genero">
                        <Form.Label column sm={2}>Gênero: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("genero", validador.genero)} />
                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}>Data: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data", validador.data)} mask="99/99/9999" onChange={handleChange}/>
                            {errors.data && <span className="text-danger">{errors.data.message}</span>}
                        </Col>
                    </Form.Group>		            
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>{' '}
                        <Link className="btn btn-danger" to="/lancamentos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>

                <br /> 

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Data</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {lancamentos.map((lancamento, i) => (
                            <tr key={i}>
                                <td>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger"
                                    onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{lancamento.nome}</td>
                                <td>{lancamento.genero}</td>
                                <td>{lancamento.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            
            </Box>
        </>
    )
}

export default LancamentosForm 
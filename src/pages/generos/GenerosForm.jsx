import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import GenerosService from '../../services/assistir/GenerosService'
import validador from '../../validators/GeneroValidator'

const GenerosForm = (props) => {

    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const genero = GenerosService.get(id)
            for (let campo in genero) {
                setValue(campo, genero[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? GenerosService.update(dados, id) : GenerosService.create(dados)
        props.history.push('/generos')
        console.log(dados);
    }


  

    return (
        <>
            <Box title="Generos">
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
                    <Form.Group as={Row} className="mb-3" controlId="idioma">
                        <Form.Label column sm={2}>Idioma: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("idioma", validador.idioma)} />
                            {errors.idioma && <span className="text-danger">{errors.idioma.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="ano">
                        <Form.Label column sm={2}>Ano: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("ano")} />
                        </Col>
                    </Form.Group>
                    				            
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>{' '}
                        <Link className="btn btn-danger" to="/generos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default GenerosForm 
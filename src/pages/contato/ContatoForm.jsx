import React, { useEffect } from 'react'
import { Col, FloatingLabel, Form, Row, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import Box from '../../components/Box'
import ContatoService from '../../services/assistir/ContatoService'
import validador from '../../validators/ContatoValidator'
import logo from '../contato/img.png'


const ContatoForm = (props) => {

    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const contato = ContatoService.get(id)
            for (let campo in contato) {
                setValue(campo, contato[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? ContatoService.update(dados, id) : ContatoService.create(dados)
        window.confirm('Sua mensagem foi Enviada :) !')
        props.history.push('/animes')
        console.log(dados);
    }

    return (
        <>

            <div class="text-center">
                <img class="img-rounded mx-auto d-block" src={logo}
                    width="180,25"
                    height="182,12"
                    alt="..."
                    className="d-inline-block align-top"
                    
                />
            </div>

            <br />
                                   
                
            <Box title="Contato">
                
                    
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={4}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Jane Doe" type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={4}>E-mail: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="email@example.com" type="email" {...register("email", validador.email)} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Col>
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Não encontrou seu anime, nos avise aqui. ">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <br />
                    
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>{ ' ' }
                        <Link className="btn btn-danger" to="/contato"><FaArrowLeft /> Voltar</Link> 
                    </div>
                </Form>
            </Box>
        </>
    )
};

export default ContatoForm

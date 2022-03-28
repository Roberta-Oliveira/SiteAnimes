import { useEffect } from 'react'
import { Col, Form, Row, Button, Image } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AnimesService from '../../services/assistir/AnimesService'
import validador from '../../validators/AnimesValidator'


const AnimesForm = (props) => {

    const { register, handleSubmit, setValue,  formState: {errors} } = useForm()

    useEffect(() => {
        const id = props.match.params.id
    
        if (id) {
          const animes = AnimesService.get(id)
            for (let campo in animes) {
                setValue(campo, animes[campo])
            }
          }
        }, [props, setValue])

        function enviarDados(dados){
            const id = props.match.params.id
            id ? AnimesService.update(dados, id) : AnimesService.create(dados)
            props.history.push('/animes')
            console.log(dados);
        }


    return (
        <>
            <Box title="Melhores 2021">
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
                        <Form.Select {...register("idioma", validador.idioma)}>
                                <option></option>
                                <option>Portugues</option>
                                <option>Japonês/Portugues</option>
                                <option>Japonês</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>					            
                    <Form.Group as={Row} className="mb-3" controlId="temporadas">
                        <Form.Label column sm={2}>Temporadas: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("temporadas", validador.temporadas)} />
                            {errors.temporadas && <span className="text-danger">{errors.temporadas.message}</span>}
                        </Col>
                    </Form.Group>					            
                				            
                    <Form.Group as={Row} className="mb-3" controlId="avaliacao">
                        <Form.Label column sm={2}>Avaliação: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("avaliacao", validador.avaliacao)} />
                            {errors.avaliacao && <span className="text-danger">{errors.avaliacao.message}</span>}
                        </Col>
                    </Form.Group>					            
                    <div className="text-center">
                    <Button variant="outline-dark" onClick={handleSubmit(enviarDados)} ><Image style={{ width:40 }} src='https://i.giphy.com/media/a6pzK009rlCak/giphy.webp' />{' '} Salvar</Button>{' '}
                    
                    </div>
                </Form>
                    
            </Box>
            <br />
                <Link className="btn btn-outline-dark" to="/animes"><FaArrowLeft />Voltar</Link>
        </>
    )
}

export default AnimesForm 
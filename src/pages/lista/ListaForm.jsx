import React, { useEffect } from "react";
import { Col, Form, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "../../components/Box";
import { FaArrowLeft } from 'react-icons/fa';
import ListaService from '../../services/assistir/ListaService'
import validador from '../../validators/ListaValidator'
import { useForm } from "react-hook-form";


const ListaForm = ( props ) => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm()


  function enviarDados(dados){
      const id = props.match.params.id
      id ? ListaService.update(dados, id) : ListaService.create(dados)
      props.history.push('/listas')
      console.log(dados);
  }
  
  useEffect(() => {
    const id = props.match.params.id

    if (id) {
      const lista = ListaService.get(id)
        for (let campo in lista) {
            setValue(campo, lista[campo])
        }
      }
  }, [props, setValue])
    
 
  return (
      <>
          <Box title="Listas">
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
                    <Form.Control type="text" {...register("genero", validador.genero)}/>
                    {errors.genero && <span className="text-danger">{errors.genero.message}</span>}
                  </Col>
                </Form.Group>
                <fieldset>
                <Form.Group controlId="opcao">
                   <Form.Label column sm={2}>Já assistido: </Form.Label>
                   
                      <Col sm={10}>
                        <Form.Check {...register("opcao", validador.opcao)}
                          type="radio"
                          label="SIM"
                          name="opcao"
                          id="opcao1"
                          value="Sim"
                          
                        />
                        <Form.Check {...register("opcao", validador.opcao)}
                          type="radio"
                          label="NÂO"
                          name="opcao"
                          id="opcao2"
                          value="Não"
                         
                        />
                        </Col>
                </Form.Group>
                </fieldset>
                
               
                <div className="text-center">
                  
                  <Button variant="outline-dark" onClick={handleSubmit(enviarDados)} ><Image style={{ width:60 }} src='https://i.pinimg.com/originals/25/f2/5d/25f25de7f2f40817456dcd1b5a2e8a08.gif' />{' '} Salvar</Button>{' '}
                </div>

              
            </Form>
          </Box>
          <br />
                  <Link className="btn btn-outline-dark" to="/listas"><FaArrowLeft />Voltar</Link> 
     </>
   );
};

export default ListaForm;

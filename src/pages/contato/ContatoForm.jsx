import React, { useEffect, useState } from 'react'
import { Col, FloatingLabel, Form, Row, Button, Image} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Box from '../../components/Box'
import ContatoService from '../../services/assistir/ContatoService'
import validador from '../../validators/ContatoValidator'
import "./contato.style.css"
import axios from 'axios';


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
    
    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        mensagem: ''
        
    });
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
    
    function handleFormSubmit(event){
        event.preventDefault();
        window.confirm('Sua mensagem foi Enviada :) !')
        console.log(campos);
        send();
        
    }

    function send(){
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('http://localhost:3030/send', 
                formData,
                {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
                })
        .then(response => { console.log(response.data); })
    }


    


    return (
        <>

            <div class="text-center">
            <Image style={{ width:300 }} src='https://c.tenor.com/64YL9Tmm7_AAAAAC/naruto-thumbs-up.gif' />
                {/*<img class="img-rounded mx-auto d-block" src={logo}
                    width="180,25"
                    height="182,12"
                    alt="..."
                    className="d-inline-block align-top"
                    
                />*/}
            </div>

            
                                   
                
            <Box title="Contato">
                
               <div>    
                <Form onSubmit={handleFormSubmit}>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange} {...register("nome", validador.nome)}  />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}

                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange}/>
            
            
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>
                    

                    <div className="text-center">
                    <Button variant="outline-dark" onClick={handleInputChange(enviarDados)} ><Image style={{ width:40 }} src='https://i.giphy.com/media/FIZ1QC610AAhi/giphy.webp' />{' '} Enviar</Button>{' '}
                    
                     </div>
                
                   { /*<input type="submit" value="Enviar" />*/}

                    <br />
                    
                    
                </Form>
            </div> 
            </Box>
        </>
    )
};

export default ContatoForm

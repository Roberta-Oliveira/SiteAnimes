import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegHandPointLeft } from 'react-icons/fa'; 
import apiAnimes from '../../services/apiAnimes'


const InicioDetalhes = (props) => {

    const [animes, setInicio] = useState({})

    useEffect(()=>{
        
        const id = props.match.params.id

        apiAnimes.get('character?name').then( resultado => {
            setInicio(resultado.data)
            console.log(resultado.data);
        })

    }, [props])


    return (
        <>
           
           {animes.id &&
                <>
                    <Row>
                                               
                        <Col md={7}>
                            <Card border="border-danger">
                                <Card.Header className="bg-danger text-white">{animes.title}</Card.Header>
                                <Card.Body>
                                <p>Personagens: {animes.name}</p>
                                <p>História: {animes.quote}</p>
                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Link to="/personagens" className="btn btn-primary mt-3">
                        <FaRegHandPointLeft /> Voltar
                    </Link>
                </>
            }

        </>
    )
}

export default InicioDetalhes

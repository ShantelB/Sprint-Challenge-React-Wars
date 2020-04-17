// Write your Character component here
import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from "axios";
import { Alert,  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Spinner} from 'reactstrap';


const Character = (props) => {

    return (

    <Container>
        <div>
        <Card className="card">
            <CardBody>

    <CardTitle><h2><strong>{props.character.name}</strong><Spinner type="grow" color="primary" /></h2></CardTitle>
    <CardSubtitle><h3>{props.character.birth_year}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.gender}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.skin_color}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.eye_color}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.hair_color}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.height}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.mass}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.homeworld}</h3></CardSubtitle>
    <CardSubtitle><h3>{props.character.species}</h3></CardSubtitle>
    


        </CardBody>
        </Card>
    </div>
    </Container>
    );
}

export default Character;
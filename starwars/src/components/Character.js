// Write your Character component here
import React from 'react';
import '../App.css';
import {Card, CardBody,
    CardTitle, CardSubtitle, Container, Spinner} from 'reactstrap';


const Character = (props) => {

    return (
// Container for the Card
    <Container>
        <div>
        <Card className="card">
            <CardBody className="cbody">
 
 {/* Characters info!!!! */}
    <CardTitle><h2>Name: <strong>{props.character.name}</strong><Spinner type="grow" color="primary" /></h2></CardTitle>
    <CardSubtitle><h3>Birth Year: <strong>{props.character.birth_year}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Gender: <strong>{props.character.gender}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Skin Color: <strong>{props.character.skin_color}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Eye Color: <strong>{props.character.eye_color}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Hair Color: <strong>{props.character.hair_color}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Height: <strong>{props.character.height}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Mass: <strong>{props.character.mass}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Homeworld: <strong>{props.character.homeworld}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Species: <strong>{props.character.species}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Starships: <strong>{props.character.starships}</strong></h3></CardSubtitle>
    <CardSubtitle><h3>Vehicles: <strong>{props.character.vehicles}</strong></h3></CardSubtitle>

        </CardBody>
        </Card>
    </div>
    </Container>
    );
}

export default Character;
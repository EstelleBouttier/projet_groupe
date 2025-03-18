import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./home.css";
import image from "../../images/homePage/accueil.jpg";


function Home() {
    return (
        <Container className="mt-4 d-flex justify-content-center align-items-center text-center">
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="titre-accueil">Apprenez le français en ligne, facilement et efficacement !</h1>
                    <p className="p-accueil">Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau ! Que vous soyez débutant ou avancé, bénéficiez d"un apprentissage dynamique et efficace avec une professeure expérimentée !</p>
                    <Button className="m-2 btn-custom">Réservez un cours !</Button>
                    <Button className="m-2 btn-custom">Contactez-moi !</Button>
                </Col>
                <Col xs={12} md={6} className="mt-3">
                    <Image
                        src={image}
                        alt="femme avec son ordinateur sur un bureau"
                        fluid 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home; 
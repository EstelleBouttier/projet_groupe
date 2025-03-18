import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./home.css";
import image from "../../../images/homePage/accueil.jpg";



function Home() {
    return (
        

        <Container className="pt-5 mb-5 d-flex justify-content-center align-items-center text-center">
            <Row>
                
                <div id="home" />
                
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h1>Apprenez le français en ligne, facilement et efficacement !</h1>
                    <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau ! Que vous soyez débutant ou avancé, bénéficiez d"un apprentissage dynamique et efficace avec une professeure expérimentée !</p>
                    <Button className="m-2 shadow-lg btn-custom">Réservez un cours !</Button>
                    <Button className="m-2 shadow-lg btn-custom">Contactez-moi !</Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="py-3">
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
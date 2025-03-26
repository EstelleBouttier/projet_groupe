import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import image from "../../../images/homePage/accueil.jpg";



function Home() {
    return (
        <Container id="home" className="pt-5 mb-5 text-center">
            <Row>
                <Col md={6}>
                    <h1>Apprenez le français en ligne, facilement et efficacement !</h1>
                    <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau ! Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée !</p>
                    <Button onClick={() =>
                        window.open(`${window.location.origin}/subscription`, '_blank')}
                        className="m-2 shadow-lg btn-custom"
                        type="submit"
                        aria-label="Réserver un cours">
                        Réservez un cours !</Button>
                    <Button className="m-2 shadow-lg btn-custom" type="submit" href="#contact" aria-label="Contactez-moi">Contactez-moi !</Button>
                </Col>
                <Col md={6} className="py-3">
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
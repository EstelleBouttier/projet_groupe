import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../../images/about/about.png";

function About() {
    return (
        <Container id="about">
            <Row>
                <Col md={6} className="my-5 text-center">
                    <h1>Jane Doe</h1>
                    <p className="py-3">
                        Passionnée par l'enseignement du français, j’ai à cœur d’accompagner mes élèves avec bienveillance et pédagogie. 
                        Mon objectif est de proposer des cours interactifs et adaptés à chaque apprenant, afin de garantir une progression efficace et durable.
                    </p>
                    <h2 className="fs-4">Ma philosophie d'enseignement</h2>
                    <p className="py-3">
                        Apprenez le français à votre rythme et en toute confiance ! 
                        Que vous soyez débutant ou avancé, mes cours sont conçus pour répondre à vos besoins et vous aider à atteindre vos objectifs. 
                        Avec des méthodes interactives et un suivi personnalisé, je vous guide pas à pas dans votre apprentissage.
                    </p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="m-1 cercle-style rounded-circle d-flex justify-content-center align-items-center text-white">
                            Bienveillance
                        </div>
                        <div className="m-1 cercle-style rounded-circle d-flex justify-content-center align-items-center text-white">
                            Pédagogie
                        </div>
                        <div className="m-1 cercle-style rounded-circle d-flex justify-content-center align-items-center text-white">
                            Patience
                        </div>
                    </div>
                </Col>

                <Col md={6} className="text-center order-md-first">
                    <Image
                        src={image}
                        alt="Portrait de Jane Doe, professeure de français"
                        className="w-50 py-3"
                        fluid
                    />
                    <h2 className="fs-4 py-3">Mes diplômes</h2>
                    <p>Master en Didactique du Français Langue Étrangère (FLE)</p>
                    <p>CAPES de Lettres Modernes</p>
                    <p>DAEFLE (Diplôme d'Aptitude à l'Enseignement du FLE)</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

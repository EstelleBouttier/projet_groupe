import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./about.css"
import image from "../../images/about/about.png"

function About() {
    return (
        <>
            <Container className=" mt-5 d-flex justify-content-center align-items-center text-center">
                <Row>
                    <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }}>
                        <h1>Jane Doe</h1>
                        <p className="mt-5">Passionnée par l'enseignement du français, Nom Prénom,  met son expertise et son enthousiasme au service de ses élèves. Grâce à une approche bienveillante et interactive, elle accompagne chaque apprenant vers une progression efficace et durable.</p>
                    </Col>

                    <Col className="mt-3" xs={{ order: 2 }} md={{ span: 6, order: 1 }}>
                        <Image
                            src={image}
                            alt="portrait d'une femme"
                            className="w-50"
                            fluid />
                        <h2 className="mt-3">Mes diplômes</h2>
                        <p className="mb-0">Master en Didactique du Français Langue Étrangère (FLE)</p>
                        <p className="mb-0">CAPES de Lettres Modernes</p>
                        <p>DAEFLE (Diplôme d'Aptitude à l'Enseignement du FLE)</p>
                    </Col>

                    <Col className="mt-3" xs={{ order: 3}}>
                        <h2>Philosophie d'enseignement</h2>
                        <p>Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau ! Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée !</p>              
                        <div className="d-flex justify-content-center">
                            <div className="m-2 cercle rounded-circle d-flex justify-content-center align-items-center text-white">
                                Bienveillance
                            </div>
                            <div className="m-2 cercle rounded-circle d-flex justify-content-center align-items-center text-white">
                                Pédagogie
                            </div>
                            <div className="m-2 cercle rounded-circle d-flex justify-content-center align-items-center text-white">
                            Patience
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../../images/about/about.png"



function About() {
    return (
        <Container id="about">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="my-5 text-center ms-auto">
                    <h1>Jane Doe</h1>
                    <p className="py-3">Passionnée par l'enseignement du français, Nom Prénom,  met son expertise et son enthousiasme au service de ses élèves. Grâce à une approche bienveillante et interactive, elle accompagne chaque apprenant vers une progression efficace et durable.</p>
                    <h2 className="fs-4">Philosophie d'enseignement</h2>
                    <p className="py-3">Progressez en français depuis chez vous avec des cours interactifs et adaptés à votre niveau ! Que vous soyez débutant ou avancé, bénéficiez d'un apprentissage dynamique et efficace avec une professeure expérimentée !</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="m-1 cercle-style shadow rounded-circle d-flex justify-content-center align-items-center text-white">
                            Bienveillance
                        </div>
                        <div className="m-1 cercle-style shadow rounded-circle d-flex justify-content-center align-items-center text-white">
                            Pédagogie
                        </div>
                        <div className="m-1 cercle-style shadow rounded-circle d-flex justify-content-center align-items-center text-white">
                            Patience
                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} className="text-center order-lg-first ms-auto">
                    <Image
                        src={image}
                        alt="portrait d'une femme"
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
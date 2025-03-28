import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container id="contact">
            <Row className="my-5 align-items-center">
                <h2 className="text-center">Contactez-moi</h2>

                {/* Carte avec les informations de contact */}
                <Col md={6}>
                    <Card className="p-4 shadow-sm text-center">
                        <Card.Body>
                            <Card.Title className="mb-4">Restons en contact !</Card.Title>
                            <Card.Text>
                                Vous avez des questions sur les cours, les tarifs ou la réservation ?
                                N’hésitez pas à me contacter, je serai ravie de vous répondre
                                et de vous aider à choisir la formule qui vous convient le mieux.
                            </Card.Text>
                            <Card.Text>
                                <BsGeoAlt className="text-primary me-2" /> 3 rue du vivier, 72000 Le Mans
                            </Card.Text>
                            <Card.Text>
                                <BsEnvelope className="text-primary me-2" /> contact@exemple.com
                            </Card.Text>
                            <Card.Text>
                                <BsTelephone className="text-primary me-2" /> +33 6 12 34 56 78
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Formulaire de contact */}
                <Col md={6}>
                    <Card className="form-style my-5 shadow-sm">
                        <Card.Body>
                            <Card.Title className="mb-3 text-center">Envoyez-moi un message</Card.Title>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formNom">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Dupont" required />
                                    <Form.Control.Feedback type="invalid">
                                        Veuillez entrer votre nom.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPrenom">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control type="text" placeholder="Aurélie" required />
                                    <Form.Control.Feedback type="invalid">
                                        Veuillez entrer votre prénom.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="nom@exemple.com" required />
                                    <Form.Control.Feedback type="invalid">
                                        Veuillez entrer une adresse email valide.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formTelephone">
                                    <Form.Label>Téléphone</Form.Label>
                                    <Form.Control type="tel" placeholder="06XXXXXXXX" required />
                                    <Form.Control.Feedback type="invalid">
                                        Veuillez entrer un numéro de téléphone valide.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Écrivez votre message ici" rows={3} required />
                                    <Form.Control.Feedback type="invalid">
                                        Veuillez écrire un message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                    <Button className="btn-custom" type="submit">Envoyer</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

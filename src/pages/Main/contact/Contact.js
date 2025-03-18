import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import "./contact.css";


function Contact() {

    const monFormulaire = [
        {
            id: 1,
            control: "formName",
            label: "Nom",
            type: "text",
            placeholder: "Dupont"
        },
        {
            id: 2,
            control: "formFirstName",
            label: "Prénom",
            type: "text",
            placeholder: "Aurélie"
        },
        {
            id: 3,
            control: "formTel",
            label: "Téléphone",
            type: "tel",
            placeholder: "06 xx xx xx xx"
        },
        {
            id: 4,
            control: "formEmail",
            label: "Email",
            type: "email",
            placeholder: "nom@exemple.com"
        },
        {
            id: 5,
            control: "formMessage",
            label: "Message",
            as: "textarea",
            placeholder: "Ecrivez votre message ici"
        },
    ];


    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={12} md={6}>
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


                <Col xs={12} md={6}>
                    <Card className="form-style py-3 px-3 mt-4">
                        <Form>
                            {monFormulaire.map((input) => (
                                <Form.Group key={input.id} className="mb-3" controlId={input.control}>
                                    <Form.Label>{input.label}</Form.Label>
                                    <Form.Control as={input.as} type={input.type} placeholder={input.placeholder} required />
                                </Form.Group>
                            ))}

                            <div className="d-flex justify-content-end">
                                <Button className="button-style" type="submit">Envoyer</Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default Contact;
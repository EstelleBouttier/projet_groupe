import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./pricing.css";

function Tarifs() {

  const mesTarifs = [
    {
      id: 1,
      title: "Cours à l'unité",
      statut: "Pour débuter",
      text: "Un cours unique idéal pour une session ponctuelle",
      price: "30€ / leçon"
    },
    {
      id: 2,
      title: "Forfait 5 séances",
      statut: "Pour un apprentissage approfondi",
      text: "Un pack de 5 cours pour progresser à votre rythme",
      price: "140€ (28€/leçon)"
    },
    {
      id: 3,
      title: "Forfait 10 séances",
      statut: "Pour un suivi complet",
      text: "Un pack de 10 cours pour un suivi régulier",
      price: "260€ (26€/leçon)"
    },
  ];

  return (
    <Container id="pricing" className="my-5 text-center">
      <Row>
        <Col>
          <h1>Nos Tarifs</h1>
          <p>Choisissez l'offre qui vous convient et commencez votre apprentissage du français !</p>
        </Col>
      </Row>

      <Row className="py-3 justify-content-center text-center">
        {mesTarifs.map((tarif) => (
          <Col key={tarif.id} xs={12} md={4} >
            <Card className="card-style mb-2 shadow-lg">
              <Card.Body>
                <Card.Title>{tarif.title}</Card.Title>
                <Card.Subtitle>{tarif.statut}</Card.Subtitle>
                <Card.Text>{tarif.text}</Card.Text>
                <Card.Text>{tarif.price}</Card.Text>
                <Button className="button-style">Souscrire</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default Tarifs;

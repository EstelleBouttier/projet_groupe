import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Courses() {

    const mesCours = [
        {
            id: 1,
            title: "🆕 Débutants",
            text: "Un cours conçu pour ceux qui commencent de zéro, avec des leçons sur l'alphabet, les salutations, et les bases de la grammaire."
        },
        {
            id: 2,
            title: "📖 Grammaire",
            text: "Un programme détaillé pour maîtriser les règles essentielles, telles que les conjugaisons, les accords et les temps verbaux."
        },
        {
            id: 3,
            title: "🗣️ Expression orale",
            text: "Des exercices interactifs et des mises en situation pour gagner en fluidité et en confiance à l'oral."
        },
        {
            id: 4,
            title: "💼 Français professionnel",
            text: "Un cours axé sur la communication en milieu professionnel, incluant la rédaction d'emails, la prise de parole en réunion et le vocabulaire spécifique.."
        },
        {
            id: 5,
            title: "✍️ Atelier d'écriture",
            text: "Un cours pour améliorer son style et enrichir son vocabulaire en travaillant sur différents types de textes (récits, essais, articles). "
        },
    ];

    return (
        <Container id="courses">
            <Row className="my-5 text-center">
                <Col>
                    <h2 className="mt-3 mb-4">Mais les cours proposés, c'est quoi?</h2>
                    <p>Je vous propose une large gamme de formations adaptées à tous les niveaux. Que vous souhaitiez apprendre les bases, améliorer votre grammaire, enrichir votre vocabulaire ou perfectionner votre expression orale, mes cours vous accompagneront dans votre apprentissage.</p>
                    <p>Grâce à des leçons variées, des exercices pratiques et un suivi personnalisé, vous pourrez avancer à votre rythme et atteindre vos objectifs linguistiques.</p>
                    <h3 className="fs-5 my-5">Voici quelques exemples de cours que je propose sur mon site de cours de français en ligne :</h3>
                
                    <ListGroup as="ol" numbered>
                        {mesCours.map((cours) => (
                            <ListGroup.Item
                                key={cours.id}
                                as="li"
                                className="shadow list-style col-sm-12 col-md-6 col-lg-6 m-auto mb-2 d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{cours.title}</div>
                                    {cours.text}
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h3 className="fs-5 my-5">Chaque cours est conçu pour s’adapter à votre niveau et à vos objectifs, avec des supports variés et un suivi personnalisé 🚀</h3>
                </Col>
            </Row>
        </Container >
    );
}

export default Courses;



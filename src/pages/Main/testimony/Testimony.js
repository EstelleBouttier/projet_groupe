import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Temoignages() {
    const avisClients = [
        {
            id: 1,
            nom: "Marie Dupont",
            commentaire: "Les cours sont excellents et très bien structurés ! J'ai énormément progressé en français.",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            nom: "Jean Martin",
            commentaire: "Une professeure très à l'écoute et patiente. Je recommande fortement !",
            note: "⭐⭐⭐⭐"
        },
        {
            id: 3,
            nom: "Sophie Bernard",
            commentaire: "Les exercices sont bien adaptés à mon niveau. Très satisfaite de mon apprentissage.",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 4,
            nom: "Lucas Moreau",
            commentaire: "Méthode très efficace et progressive. Je recommande vivement ces cours.",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 5,
            nom: "Emma Lefevre",
            commentaire: "Grâce à ces cours, j'ai enfin confiance en mon français !",
            note: "⭐⭐⭐⭐"
        },
        {
            id: 6,
            nom: "Paul Durand",
            commentaire: "Les supports sont clairs et les explications détaillées. J'apprécie vraiment la méthode pédagogique.",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 7,
            nom: "Nina Lambert",
            commentaire: "Les cours sont interactifs et engageants. J'ai progressé plus vite que prévu !",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 8,
            nom: "Thomas Garnier",
            commentaire: "J'avais du mal avec la grammaire, mais grâce aux exercices pratiques, tout devient plus simple !",
            note: "⭐⭐⭐⭐"
        },
        {
            id: 9,
            nom: "Camille Petit",
            commentaire: "Une super expérience ! Le suivi est personnalisé et adapté à mon niveau.",
            note: "⭐⭐⭐⭐⭐"
        },
        {
            id: 10,
            nom: "Antoine Roussel",
            commentaire: "J'étais sceptique sur les cours en ligne, mais je suis convaincu ! Très professionnel.",
            note: "⭐⭐⭐⭐"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };


    return (
        <Container className="my-5 text-center py-5">
            <h1>Nos Témoignages</h1>
            <p>Découvrez ce que nos élèves pensent de nos cours !</p>

            <Slider {...settings}>
                {avisClients.map((avis) => (
                    <div key={avis.id} className="p-3">
                        <Card className="shadow-sm border-light text-center p-3">
                            <Card.Body>
                                <h3>{avis.nom}</h3>
                                <p>"{avis.commentaire}"</p>
                                <p className="text-warning">{avis.note}</p>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </Container>
    );
}

export default Temoignages;

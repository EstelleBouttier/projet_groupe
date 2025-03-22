import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSubscription from "../../router/NavbarSubscription";

const Reservation = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <NavbarSubscription />
      <Container className="mt-5 text-center">
        <h2>Réservez un rendez-vous</h2>
        <Row >
          <Col>
            <div
              className="calendrier calendly-inline-widget"
              data-url="https://calendly.com/estellebouttier/30min?primary_color=e57a44"
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservation;

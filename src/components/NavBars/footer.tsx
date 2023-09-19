import React, { useEffect, useState } from "react";
import "../../assets/css/footer.css";
import { Col, ListGroup, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`general-footer ${isAtBottom ? "footer-visible" : ""}`}>
      <div className="footer-container">
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
              <ListGroup.Item>ejemplo</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>Footer mal hecho aún</Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;

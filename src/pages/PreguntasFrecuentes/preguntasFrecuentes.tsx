import React, { useEffect, useState } from "react";
import generalService from "../../context/services/generalService";
import { Accordion } from "react-bootstrap";
import { IPreguntasFrecuentes } from "../../Interfaces/IPreguntasFrecuentes";

const PreguntasFrecuentesComponent: React.FC = () => {
  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState<
    IPreguntasFrecuentes[]
  >([]);

  useEffect(() => {
    const fetchPreguntasFrecuentes = async () => {
      setPreguntasFrecuentes(
        await generalService.getPreguntasRespuestasFrecuentes()
      );
    };

    fetchPreguntasFrecuentes();
  }, []);

  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <Accordion>
        {preguntasFrecuentes.map((preguntaRespuesta, index) => (
          <Accordion.Item key={index} eventKey={index + ""}>
            <Accordion.Header>{preguntaRespuesta.pregunta}</Accordion.Header>
            <Accordion.Body>{preguntaRespuesta.respuesta}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default PreguntasFrecuentesComponent;
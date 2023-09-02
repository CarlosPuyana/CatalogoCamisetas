import React from 'react';
import { useParams } from 'react-router-dom';

const PageComponent: React.FC = () => {
    const { opc } = useParams();

    let content;

    switch (opc) {
        case 'contacto':
            content = <PaginaContacto />;
            break;
        case 'tallas':
            content = <PaginaTallas />;
            break;
        case 'precios':
            content = <PaginaPrecios />;
            break;
        case 'faqs':
            content = <PreguntasFrecuentes />;
            break;
    }

    return (
        <div>
            {content}
        </div>
    );
}

const PaginaContacto: React.FC = () => {
    return (
        <div>
            <h2>Contacto</h2>
            <p>Información de contacto</p>
        </div>
    )
}

const PaginaTallas: React.FC = () => {
    return (
        <div>
            <h2>Tallas</h2>
            <p>Guía de tallas</p>
        </div>
    )
}

const PaginaPrecios: React.FC = () => {
    return (
        <div>
            <h2>Precios</h2>
            <p>Lista de precios</p>
        </div>
    )
}

const PreguntasFrecuentes: React.FC = () => {
    return (
        <div>
            <h2>Preguntas Frecuentes</h2>
            <p>Respuestas a las preguntas más comunes</p>
        </div>
    )
}

export default PageComponent;
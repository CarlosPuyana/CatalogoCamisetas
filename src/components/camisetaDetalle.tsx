import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { ICamisetaDetalleProps } from '../Interfaces/camisetas';
import '../css/camisetaDetalle.css';

const CamisetaDetalle: React.FC<ICamisetaDetalleProps> = ({ camisetas }) => {
    const { id } = useParams();
    const camiseta = camisetas.find((c) => c.id === Number(id));
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        
    }, []);

    if (!camiseta) {
        return <p>No existe</p>;
    }

    camiseta.imagen.replace('\n', '');
    const imagenesSeparadas = camiseta.imagen.split(' | ');

    const abrirModal = () => {
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
    };

    return (
        <div className="d-flex">
            <div className="d-flex flex-column align-items-end w-80">
                <Container className="mt-5" style={{ width: '80%' }}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img
                                    src={camiseta.imagen}
                                    className="img-fluid rounded-start camiseta-image"
                                    alt={camiseta.nombre}
                                />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title camiseta-title">{camiseta.nombre}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='additional-photos'>
                        {imagenesSeparadas.map((imagen, index) => (
                            <img key={index} src={imagen} alt={`Imagen ${index + 2}`} onClick={abrirModal} />
                        ))}
                    </div>
                    <br></br>
                    <br></br>
                    <Link to="/" className="boton">
                        Volver
                    </Link>
                    {/**MODAL */}
                    <ImagenesModal
                        imagenes={imagenesSeparadas}
                        initialIndex={0}
                        show={showModal}
                        onHide={cerrarModal}
                    />
                </Container>
            </div>
        </div>
    );
};

const ImagenesModal = ({ imagenes, initialIndex, show, onHide }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const imagenAnterior = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    const siguienteImagen = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Body>
                <img
                    src={imagenes[currentIndex]}
                    alt={`${currentIndex + 1}`}
                    style={{ maxWidth: '100%', height: 'auto' }} // tamanio img
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={imagenAnterior}>
                    Anterior
                </Button>
                <Button variant="secondary" onClick={siguienteImagen}>
                    Siguiente
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CamisetaDetalle;

import React, { useEffect } from 'react';
import Sidebar from '../components/NavBars/sidebar.tsx';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { ICamisetaDetalleProps } from '../Interfaces/camisetas.ts';
import TopBar from './NavBars/topBar.tsx';
import '../css/camisetaDetalle.css';

const CamisetaDetalle: React.FC<ICamisetaDetalleProps> = ({ camisetas }) => {
    const { id } = useParams();
    const camiseta = camisetas.find((c) => c.id === Number(id));

    useEffect(() => {

    }, []);

    if (!camiseta) {
        return <p>No existe</p>;
    }

    const imagenesSeparadas = camiseta.imagen.split(' | ');

    return (
        <div className="d-flex">
            <Sidebar camisetas={camisetas} onEquipoSelected={function (equipo: string): void {
                throw new Error('Function not implemented.');
            }} />
            <div className="d-flex flex-column align-items-end w-80">
                <TopBar />
                <Container className="mt-5" style={{ width: '80%' }}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={camiseta.imagen} className="img-fluid rounded-start camiseta-image" alt={camiseta.nombre} />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title camiseta-title">{camiseta.nombre}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="additional-photos">
                        {/* Mapea y muestra las fotos adicionales aquí */}
                        {imagenesSeparadas.map((imagen, index) => (
                            <img key={index} src={imagen} alt={`Imagen ${index + 2}`} />
                        ))}
                    </div>
                    <br></br>
                    <br></br>
                <Link to="/" className="back-link">Volver</Link>
                </Container>
            </div>
        </div>
    );
};

export default CamisetaDetalle;

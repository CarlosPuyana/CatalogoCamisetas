import React, { useEffect } from 'react';
import Sidebar from './sidebar.tsx';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

interface Camiseta {
    id: number;
    create_at: number;
    equipo: string;
    liga: string;
    temporada: string;
    imagen: string;
    nombre: string;
    descripcion: string;
}

interface CamisetaDetalleProps {
    camisetas: Camiseta[];
}

const CamisetaDetalle: React.FC<CamisetaDetalleProps> = ({ camisetas }) => {
    const { id } = useParams();
    const camiseta = camisetas.find((c) => c.id === Number(id));

    useEffect(() => {

    }, []);

    if (!camiseta) {
        return <p>No existe</p>;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <Container className="mt-5" style={{ width: '80%' }}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={camiseta.imagen} className="img-fluid rounded-start" alt={camiseta.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{camiseta.nombre}</h5>
                                <Link to="/">Volver</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CamisetaDetalle;

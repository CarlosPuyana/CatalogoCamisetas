import React, { useEffect, useState } from 'react';
import supabase from '../supabase.ts'
import { Container } from 'react-bootstrap';
import Sidebar from './sidebar.tsx'; // Importa el componente Sidebar


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

const CamisetaList: React.FC = () => {

    const [ camisetas, setCamisetas ] = useState<Camiseta[]>([]);

    useEffect(() => {
        // Vamos a consultar la BBDD
        async function fecthCamisetas() {
            try {
                const { data, error } = await supabase.from('Camisetas').select('*');

                if (error) throw error;

                if (data) {
                    console.log(data)
                    setCamisetas(data);
                } 

            } catch (error) {
                console.error('Error fetch camisetas', error);
            }
        }

        fecthCamisetas();
    }, []);

    return (
      <div className="d-flex">
        <Sidebar />
        <Container className="mt-5" style={{ width: '80%' }}>
          <h2 className="text-center mb-4">Lista de Camisetas</h2>
          <div className="d-flex flex-wrap align-items-stretch">
            {camisetas.map((camiseta) => (
              <div key={camiseta.id} className="mb-4" style={{ flexBasis: '14%', marginLeft: '10px', marginRight: '10px' }}>
                <div className="card p-2 d-flex flex-column h-100">
                  <img src={camiseta.imagen} className="card-img-top" alt={camiseta.nombre} />
                  <div className="card-body mt-auto"> {/* Utiliza mt-auto para situar el contenido en la esquina inferior */}
                    <p className="card-text mb-0" style={{ fontSize: '0.8rem' }}>{camiseta.nombre}</p>
                    <p className="card-text" style={{ fontSize: '0.7rem', color: 'gray', textAlign: 'right' }}>{camiseta.equipo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );

   };

export default CamisetaList;
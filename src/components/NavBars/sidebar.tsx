import React, { useEffect, useState } from 'react';
import supabase from '../../supabase.ts';

const Sidebar: React.FC = () => {
  const [ligas, setLigas] = useState<string[]>([]);
  const [equipos, setEquipos] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const { data: ligasData, error: ligasError } = await supabase.from('Camisetas').select('liga');
        const { data: equiposData, error: equiposError } = await supabase.from('Camisetas').select('equipo').order('equipo', { ascending: true });

        if (ligasError || equiposError) throw ligasError || equiposError;

        if (ligasData) {
          const uniqueLigas = [...new Set(ligasData.map((item) => item.liga))];
          console.log(uniqueLigas);
          setLigas(uniqueLigas);
        }

        if (equiposData) {
          const uniqueEquipos = [...new Set(equiposData.map((item) => item.equipo))];
          console.log(uniqueEquipos);
          setEquipos(uniqueEquipos);
        }
      } catch (error) {
        console.error('Error fetching categorías', error);
      }
    }

    fetchCategorias();
  }, []);

  const categorias = [...ligas, ...equipos]; // Combinar ligas y equipos
  console.log(categorias);

  return (
    <div className="bg-light" style={{ width: '20%', minHeight: '100vh' }}>
      <div className="p-3">
        <h4>Categorías</h4>
        <ul className="list-group">
          {categorias.map((categoria, index) => (
            <li key={index} className="list-group-item">
              {categoria}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

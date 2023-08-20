import React from 'react';

const Sidebar: React.FC = () => {
  const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3']; // Agrega las categorías aquí

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

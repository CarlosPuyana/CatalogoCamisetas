import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CamisetaList from './components/camisetaList.tsx';
import RegisterForm from './components/Auth/registerForm.tsx';
import LoginForm from './components/Auth/loginForm.tsx';
import CamisetaForm from './components/camisetaForm.tsx';
import CamisetaDetalle from './components/camisetaDetalle.tsx';
import camisetaService from './services/camisetaService.ts';

function App() {
  // Para esto debería hacerse un servicio propio de momento lo pongo aqui
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCamisetas = await camisetaService.getCamisetasByTemporada('23/24');
      setCamisetas(fetchedCamisetas);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<CamisetaList camisetas={camisetas} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add" element={<CamisetaForm />} />
        <Route path="/camiseta/:id" element={<CamisetaDetalle camisetas={camisetas} />} />
        <Route path="/busqueda/:busqueda" element={<CamisetaList camisetas={camisetas} />} />
      </Routes>
    </div>
  );
}

export default App;

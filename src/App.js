import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import supabase from './supabase.ts';
import CamisetaList from './components/camisetaList.tsx';
import RegisterForm from './components/Auth/registerForm.tsx';
import LoginForm from './components/Auth/loginForm.tsx';
import CamisetaForm from './components/camisetaForm.tsx';
import CamisetaDetalle from './components/camisetaDetalle.tsx';

function App() {
  // Para esto debería hacerse un servicio propio de momento lo pongo aqui
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    async function fetchCamisetas() {
      try {
        const { data, error } = await supabase.from('Camisetas').select('*');
        if (error) throw error;
        if (data) {
          setCamisetas(data);
        }
      } catch (error) {
        console.error('Error fetching camisetas', error);
      }
    }

    fetchCamisetas();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CamisetaList camisetas={camisetas} />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/add" element={<CamisetaForm />} />
      <Route path="/camiseta/:id" element={<CamisetaDetalle camisetas={camisetas} />} />
    </Routes>
  );
}

export default App;

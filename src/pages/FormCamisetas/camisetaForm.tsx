import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase, { auth } from "../../context/supabase/supabase";

const CamisetaForm: React.FC = () => {
  const navigate = useNavigate();
  const [equipo, setEquipo] = useState("");
  const [liga, setLiga] = useState("");
  const [temporada, setTemporada] = useState("");
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkSession() {
      const { data, error } = await auth.getSession();
      if (!data.session && !error) {
        navigate("/login"); // Si no hay sesión activa, redirige al login
      }
    }
    checkSession();
  }, [navigate]); // El segundo argumento vacío asegura que esto solo se ejecute una vez al montar el componente

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("Camisetas")
        .insert([{ equipo, liga, temporada, imagen, nombre }]);

      if (error) {
        setError(error.message);
        return;
      }

      console.log("Camiseta guardada con éxito:", data);
      // Puedes agregar más acciones aquí después de guardar

      // Limpiar los campos después de guardar
      setEquipo("");
      setLiga("");
      setTemporada("");
      setImagen("");
      setNombre("");
      setError(null);
    } catch (error) {
      console.error("Error al guardar la camiseta:", error);
      setError("Error al guardar la camiseta");
    }
  };

  return (
    <div>
      <h2>Formulario de Camiseta</h2>
      <form onSubmit={handleGuardar}>
        <div>
          <label>Equipo:</label>
          <input
            type="text"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Liga:</label>
          <input
            type="text"
            value={liga}
            onChange={(e) => setLiga(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Temporada:</label>
          <input
            type="text"
            value={temporada}
            onChange={(e) => setTemporada(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default CamisetaForm;

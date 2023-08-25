import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import CamisetaList from './components/camisetaList.tsx';
import RegisterForm from './components/Auth/registerForm.tsx';
import LoginForm from './components/Auth/loginForm.tsx';
import CamisetaForm from './components/camisetaForm.tsx';

function App() {
  return (
    <Routes>
        {/* Configura las rutas */}
          <Route path="/" Component={CamisetaList} />
          <Route path="/register" Component={RegisterForm} />
          <Route path="/login" Component={LoginForm} />
          <Route path="/add" Component={CamisetaForm} />
          {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
}

export default App;

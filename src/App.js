import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import CamisetaList from './components/camisetaList.tsx';
import RegisterForm from './components/registerForm.tsx';
import LoginForm from './components/loginForm.tsx';

function App() {
  return (
    <Routes>
        {/* Configura las rutas */}
          <Route path="/" Component={CamisetaList} />
          <Route path="/register" Component={RegisterForm} />
          <Route path="/login" Component={LoginForm} />
          {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;

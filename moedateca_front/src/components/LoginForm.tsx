import React, { useState } from 'react';
import axios from '../Api';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', { username, password });
      const token = response.data.token;

      //Armazena o token na sessionStorage
      sessionStorage.setItem('token', token);

      //Chama a função onLogin para passar o token
      onLogin(token);
      navigate("/home");
    } catch (error) {
      console.error('Erro de login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

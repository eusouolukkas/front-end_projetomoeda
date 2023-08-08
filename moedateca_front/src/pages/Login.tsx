import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = (token: string) => {
    // Armazene o token em algum lugar (por exemplo, no estado global)
    console.log('Token:', token);
  };

  return (
    <div>
      <h1>Seja Bem-Vindo(a)</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

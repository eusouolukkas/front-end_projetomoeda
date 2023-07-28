import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Api";

const Cadastro: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const response = await axios.post("/users/cadastro", {
        username,
        password,
        confirmPassword,
      });
      console.log("Cadastro realizado com sucesso!", response.data);
      navigate("/login")
    } catch (error) {
      console.error("Cadastro falhou!", error);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleCadastro}>Enviar</button>
    </div>
  );
};

export default Cadastro;

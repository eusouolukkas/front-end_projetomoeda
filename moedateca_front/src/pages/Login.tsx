import { FC, useState } from "react";
import axios from "../Api";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/users/login", {
        username,
        password,
      });

      console.log("Login realizado com sucesso!", response.data);
      //Redirecionamento para a página Home
    } catch (error) {
      console.error("Login falhou!", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

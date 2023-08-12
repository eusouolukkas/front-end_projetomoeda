import React, { useEffect, useState } from "react";
import axios from "../Api";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [year, setYear] = useState(0);
  const [information, setInformation] = useState("");
  const [type, setType] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    axios.defaults.headers.Authorization = `Bearer ${token}`;

    if(!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    //remove token da sessionStorage
    sessionStorage.removeItem('token');

    //redireciona para a página de login
    navigate('/login');
  }

  const handleCadastroMoeda = async () => {
    try {
      const response = await axios.post("/coins/", {
        country,
        value,
        year,
        information,
        type,
      })
      console.log("Moeda cadastrada com sucesso!", response.data);
    } catch (error) {
      console.error("Cadastro falhou!", error)
    }
  };

  return (
    <div>
      <h2>Cadastre uma moeda</h2>
      <input
        type="text"
        placeholder="País"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ano"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Informações"
        value={information}
        onChange={(e) => setInformation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button onClick={handleCadastroMoeda}>Cadastrar</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
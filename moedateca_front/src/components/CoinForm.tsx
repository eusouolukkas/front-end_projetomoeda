import React, { useEffect, useState } from "react";
import axios from "../Api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CoinFormProps {
  userId: string;
}

const CoinForm: React.FC<CoinFormProps> = ({ userId }) => {
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [year, setYear] = useState(0);
  const [information, setInformation] = useState("");
  const [type, setType] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

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
      const response = await axios.post("/coins/coins", {
        country,
        value,
        year,
        information,
        type,
        userId,
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
      <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Nacional">Nacional</option>
          <option value="Estrangeira">Estrangeira</option>
        </select>
      <button onClick={handleCadastroMoeda}>Cadastrar</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default CoinForm;
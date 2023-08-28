import React, { useState, useEffect } from 'react';
import axios from '../Api';

interface Coin {
  id: number;
  country: string;
  value: string;
  year: string;
  information: string;
  type: string;
}

const CoinList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    try {
      const response = await axios.get('/coins');
      setCoins(response.data);
    } catch (error) {
      console.error('Erro ao obter moedas:', error);
    }
  };

  if (!coins) {
    return <p>Carregando detalhes da moeda...</p>;
  }

    const handleDelete = async () => {
    try {
      await axios.delete(`/coins/:id`);
    } catch (error) {
      console.error('Erro ao excluir moeda:', error);
    }
  };

  return (
    <div>
      <ul>
        {coins.map((coin, index) => (
          <details key={index}>
            <summary>{coin.country} - {coin.value}</summary>
              <li>
                <p>País: {coin.country}</p>
                <p>Valor: {coin.value}</p>
                <p>Ano: {coin.year}</p>
                <p>Informação: {coin.information}</p>
                <p>Tipo: {coin.type}</p>
              </li>
              <button>Editar</button>
              <button onClick={() => handleDelete()}>Excluir</button>
          </details>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;

// src/MoedaComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from '../Api';

const CoinComponent: React.FC = () => {
  const [moeda, setMoeda] = useState<number>(0);

  useEffect(() => {
    const fetchMoeda = async () => {
      // Carregar a moeda da API interna aqui
    };

    fetchMoeda();
  }, []);

  const deleteMoeda = async (coinId: number) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.delete(`/coins/${coinId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

  const handleDeleteMoeda = async (coinId: number) => {
    try {
      await deleteMoeda(coinId);
      setMoeda(prevMoedas => prevMoedas.filter((coin: { id: number; }) => coin.id !== coinId));
    } catch (error) {
      console.error('Erro ao excluir a moeda:', error);
    }
  };

  return (
    <div>
      <h2>Moeda Atual: R${moeda.toFixed(2)}</h2>
      <button onClick={handleDeleteMoeda(moeda.coinId)}>Excluir Moeda</button>
    </div>
  );
};

export default CoinComponent;

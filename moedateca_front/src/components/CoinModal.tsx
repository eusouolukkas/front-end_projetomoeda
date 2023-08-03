import React, { useState } from 'react';
import Modal from 'react-modal';

interface CreateCoinModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onCreateCoin: (coinData: Coin) => void;
}

interface Coin {
  country: string;
  value: string;
  year: number;
  information: string;
  type: string;
}

const CoinModal: React.FC<CreateCoinModalProps> = ({ isOpen, onRequestClose, onCreateCoin }) => {
  const [country, setCountry] = useState('');
  const [value, setValue] = useState('');
  const [year, setYear] = useState(0);
  const [information, setInformation] = useState('');
  const [type, setType] = useState('Nacional');

  const handleCreateCoin = () => {
    const newCoin: Coin = {
      country,
      value,
      year,
      information,
      type,
    };

    onCreateCoin(newCoin);

    // Limpa os campos do formulário após a criação da moeda
    setCountry('');
    setValue('');
    setYear(0);
    setInformation('');
    setType('Nacional');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <h2>Criar Nova Moeda</h2>
      <div>
        <label>País:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div>
        <label>Valor:</label>
        <input type="string" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <label>Ano:</label>
        <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Informação:</label>
        <textarea value={information} onChange={(e) => setInformation(e.target.value)} />
      </div>
      <div>
        <label>Tipo:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Nacional">Nacional</option>
          <option value="Estrangeira">Estrangeira</option>
        </select>
      </div>
      <button onClick={handleCreateCoin}>Criar Moeda</button>
      <button onClick={onRequestClose}>Cancelar</button>
    </Modal>
  );
};

export default CoinModal;

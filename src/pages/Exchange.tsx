import React from 'react';
import { ethers } from 'ethers';

interface ExchangeProps {
  contract: ethers.Contract;
}

export const Exchange: React.FC<ExchangeProps> = ({ contract }) => {
  const [selectedProperties, setSelectedProperties] = React.useState<number[]>([]);
  const [targetType, setTargetType] = React.useState<string>('');

  const handleExchange = async () => {
    if (selectedProperties.length === 0 || !targetType) {
      alert('Veuillez sélectionner des propriétés et un type cible.');
      return;
    }
    try {
      const tx = await contract.exchangeProperties(selectedProperties, targetType);
      await tx.wait();
      alert('Échange réussi !');
    } catch (error) {
      console.error('Erreur lors de l\'échange :', error);
      alert('Échec de l\'échange.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Échanger des Propriétés</h1>
      <div className="mb-4">
        <label className="block mb-2">Sélectionnez les propriétés à échanger :</label>
        {/* Ajoute ici un sélecteur de propriétés */}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Type de propriété cible :</label>
        <select
          value={targetType}
          onChange={(e) => setTargetType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sélectionnez un type</option>
          <option value="maison">Maison</option>
          <option value="gare">Gare</option>
          <option value="hotel">Hôtel</option>
        </select>
      </div>
      <button
        onClick={handleExchange}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Échanger
      </button>
    </div>
  );
};
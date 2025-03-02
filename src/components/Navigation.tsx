import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Web3 Monopoly
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/my-properties" className="hover:underline">
            Mes Propriétés
          </Link>
          <Link to="/exchange" className="hover:underline">
            Échanger
          </Link>
        </div>
      </div>
    </nav>
  );
};
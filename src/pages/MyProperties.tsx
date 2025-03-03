import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { ethers } from 'ethers';

interface MyPropertiesProps {
  contract: ethers.Contract;
}

export const MyProperties: React.FC<MyPropertiesProps> = ({ contract }) => {
  const [properties, setProperties] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchProperties = async () => {
        try {
          const totalSupply = await contract.totalSupply();
          const properties = [];
          for (let i = 0; i < totalSupply; i++) {
            const property = await contract.getPropertyDetails(i);
            properties.push(property);
          }
          setProperties(properties);
        } catch (error) {
          console.error("Erreur lors de la récupération des propriétés :", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProperties();
    }, [contract]);
  return (
    <div className="container mx-auto px-4 py-10">
      {loading ? (
                <p className="text-center text-gray-600 text-lg">Chargement des propriétés...</p>
              ) : properties.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">Aucune propriété disponible.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                  ))}
                </div>
              )}
    </div>
  );
};
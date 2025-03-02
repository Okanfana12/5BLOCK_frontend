import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { ethers } from 'ethers';

interface MyPropertiesProps {
  contract: ethers.Contract;
}

export const MyProperties: React.FC<MyPropertiesProps> = ({ contract }) => {
  const [myProperties, setMyProperties] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProperties = async () => {
      try {
        const totalSupply = await contract.totalSupply();
        const properties = [];
        for (let i = 0; i < totalSupply; i++) {
          const property = await contract.getPropertyDetails(i);
          properties.push(property);
        }
        setMyProperties(properties);
      } catch (err) {
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [contract]);

  if (loading) {
    return <div className="text-center py-8">Chargement de vos propriétés...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (myProperties.length === 0) {
    return <div className="text-center py-8">Vous ne possédez aucune propriété.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {myProperties.map((property) => (
        <PropertyCard
          key={property.id}
          property={{
            name: property.name,
            location: property.location,
            value: property.value.toString(),
            surface: property.surface.toString(),
            type: property.propertyType,
            imageUrl: property.imageHash, // Utilisez imageHash ou une URL par défaut
          }}
          onClick={() => {
            // Rediriger vers la page des détails de la propriété
            window.location.href = `/property/${property.id}`;
          }}
        />
      ))}
    </div>
  );
};
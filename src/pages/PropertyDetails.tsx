import React from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';

interface PropertyDetailsProps {
  contract: ethers.Contract;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ contract }) => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchProperty = async () => {
      const property = await contract.getPropertyDetails(id);
      setProperty(property);
    };
    fetchProperty();
  }, [contract, id]);

  if (!property) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{property.name}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-gray-600 mb-2">{property.value} ETH</p>
      <p className="text-gray-600 mb-2">{property.surface} m²</p>
      <img src={property.imageUrl} alt={property.name} className="w-full h-64 object-cover mb-4" />
    </div>
  );
};
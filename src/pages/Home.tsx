import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { ethers } from 'ethers';

interface HomeProps {
  contract: ethers.Contract;
}

export const Home: React.FC<HomeProps> = ({ contract }) => {
  const [properties, setProperties] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProperties = async () => {
      const totalSupply = await contract.totalSupply();
      const properties = [];
      for (let i = 0; i < totalSupply; i++) {
        const property = await contract.getPropertyDetails(i);
        properties.push(property);
      }
      setProperties(properties);
    };
    fetchProperties();
  }, [contract]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};
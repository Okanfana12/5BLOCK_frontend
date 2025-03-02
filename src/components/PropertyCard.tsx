import React from 'react';
import { Building2, Train, Hotel } from 'lucide-react';
import { Property, PropertyType } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyTypeIcon = ({ type }: { type: PropertyType }) => {
  switch (type) {
    case 'maison':
      return <Building2 className="w-6 h-6" aria-label="Maison" />;
    case 'gare':
      return <Train className="w-6 h-6" aria-label="Gare" />;
    case 'hotel':
      return <Hotel className="w-6 h-6" aria-label="Hôtel" />;
    default:
      return null;
  }
};

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const { imageUrl, name, location, value, surface, type } = property;

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="relative h-48">
        <img
          src="https://placehold.co/300"
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/300';
          }}
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg">
          <PropertyTypeIcon type={type} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{value} ETH</span>
          <span className="text-gray-500 text-sm">{surface} m²</span>
        </div>
      </div>
    </div>
  );
};
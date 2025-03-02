export type PropertyType = 'maison' | 'gare' | 'hotel';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  value: string;
  surface: string;
  documentHash: string;
  imageHash: string;
  previousOwners: string[];
  createdAt: string;
  lastTransferAt: string;
  imageUrl: string; // For demo purposes, we'll use Unsplash images
}
// src/types/index.ts
export interface CrochetPattern {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  flowerType: string;
  estimatedTime: string;
  materials: string[];
  hooks: string[];
  content: string; // Markdown content
  tags: string[];
  dateAdded: string;
  thumbnail: string; 
  imageUrls: string[]; 
  price?: number; // NEW: Optional price field
}
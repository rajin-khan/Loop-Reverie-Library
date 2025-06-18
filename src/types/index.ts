// src/types/index.ts
export interface CrochetPattern {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  flowerType: string;
  estimatedTime: string;
  materials: string[];
  hooks: string[];
  content: string;
  tags: string[];
  dateAdded: string;
  thumbnail: string; 
  imageUrls: string[]; 
  price?: number;
  youtubeId?: string; // NEW: Optional YouTube Video ID field
}
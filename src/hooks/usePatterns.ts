// src/hooks/usePatterns.ts
import { patterns } from '../data/patterns';

export const usePatterns = () => {
  const getPatterns = () => {
    return patterns;
  };

  const getPatternById = (id: string) => {
    return patterns.find(p => p.id === id);
  };

  return { getPatterns, getPatternById };
};
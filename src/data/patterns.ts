// src/data/patterns.ts (Updated for local images)
import { type CrochetPattern } from '../types';

import tulipAmigurumiContent from '../patterns/markdown/tulip-amigurumi.md?raw';
import lilyContent from '../patterns/markdown/lily.md?raw';
import lavenderContent from '../patterns/markdown/lavender.md?raw';
import roseSpecialContent from '../patterns/markdown/rose-special.md?raw';
import roseSimpleContent from '../patterns/markdown/rose-simple.md?raw';

export const patterns: CrochetPattern[] = [

  {
    id: 'rose-simple',
    title: 'Rose',
    difficulty: 'Beginner',
    flowerType: 'Basic',
    estimatedTime: '< 1 h',
    materials: ['Yarn'],
    hooks: ['(not specified)'],
    tags: ['rose', 'beginner', 'quick', 'rolled'],
    dateAdded: '2024-05-22',
    thumbnail: '/images/rose-simple.jpeg',
    imageUrls: ['/images/rose-simple.jpeg'],
    price: 250,
    youtubeId: 'TvG7wO-y85I',
    content: roseSimpleContent,
  },
  {
    id: 'rose-special',
    title: 'Rose (Special)',
    difficulty: 'Advanced',
    flowerType: 'Multi-Part',
    estimatedTime: '4-5 h',
    materials: ['Yarn (multiple colors)', 'Floral wire'],
    hooks: ['(not specified)'],
    tags: ['rose', 'realistic', 'advanced', 'multi-part'],
    dateAdded: '2024-05-22',
    thumbnail: '/images/rose-special.jpeg',
    imageUrls: ['/images/rose-special.jpeg'],
    price: 350,
    youtubeId: 'mmzbHbLcUPs',
    content: roseSpecialContent,
  },
  {
    id: 'lily',
    title: 'Lily',
    difficulty: 'Advanced',
    flowerType: 'Multi-Part',
    estimatedTime: '3-4 h',
    materials: ['Worsted yarn', 'Acrylic yarn', 'Floral wire', 'Hot glue'],
    hooks: ['2.5mm'],
    tags: ['lily', 'realistic', 'wired', 'advanced', 'bouquet'],
    dateAdded: '2024-05-22',
    thumbnail: '/images/lily.jpeg',
    imageUrls: ['/images/lily.jpeg'],
    price: 450,
    youtubeId: 'bnmQs86f8dE',
    content: lilyContent,
  },
  {
    id: 'lavender',
    title: 'Lavender',
    difficulty: 'Beginner',
    flowerType: 'Basic',
    estimatedTime: '30-45 m',
    materials: ['Weight 3 yarn', 'Floral wire', 'Hot glue'],
    hooks: ['3.75mm'],
    tags: ['lavender', 'beginner', 'quick', 'wrap'],
    dateAdded: '2024-05-22',
    thumbnail: '/images/lavender.jpeg',
    imageUrls: ['/images/lavender.jpeg'],
    price: 200,
    youtubeId: '006bev7DHnc',
    content: lavenderContent,
  },
  {
    id: 'tulip-amigurumi',
    title: 'Tulip',
    difficulty: 'Beginner',
    flowerType: 'Amigurumi',
    estimatedTime: '45 m',
    materials: ['Cotton yarn', 'Stuffing'],
    hooks: ['4.0mm'],
    tags: ['tulip', 'amigurumi', 'beginner', '3D', 'stuffed'],
    dateAdded: '2024-05-22',
    thumbnail: '/images/tulip-amigurumi.jpeg',
    imageUrls: ['/images/tulip-amigurumi.jpeg'],
    price: 250,
    youtubeId: '33GQm50lMYQ',
    content: tulipAmigurumiContent,
  }
];
// src/data/patterns.ts (Updated for local images)
import { type CrochetPattern } from '../types';

import tulipAmigurumiContent from '../patterns/markdown/tulip-amigurumi.md?raw';
import lilyContent from '../patterns/markdown/lily.md?raw';
import lavenderContent from '../patterns/markdown/lavender.md?raw';
import roseSpecialContent from '../patterns/markdown/rose-special.md?raw';
import roseSimpleContent from '../patterns/markdown/rose-simple.md?raw';
import babysBreathContent from '../patterns/markdown/babys-breath.md?raw';
import forgetMeNotContent from '../patterns/markdown/forget-me-not.md?raw';

export const patterns: CrochetPattern[] = [
    
  {
    id: 'rose-simple',
    title: 'Rose',
    difficulty: 'Beginner',
    flowerType: 'Layered Rolled Rose',
    estimatedTime: '< 1 h',
    materials: ['Weight 4 acrylic yarn', 'Bamboo skewer', 'Hot glue'],
    hooks: ['4.5mm'],
    tags: ['rose', 'beginner', 'quick', 'rolled', 'layered'],
    dateAdded: '2024-05-27', // Updated date
    thumbnail: '/images/rose-simple.jpeg',
    imageUrls: ['/images/rose-simple.jpeg'],
    price: 250,
    youtubeId: 'wjvJ5w9dsrw',
    content: roseSimpleContent,
  },
  {
    id: 'babys-breath',
    title: 'Baby\'s Breath',
    difficulty: 'Beginner',
    flowerType: 'Filler',
    estimatedTime: '< 1 h',
    materials: ['4-ply milk cotton yarn', 'Craft wire'],
    hooks: ['2.5mm'],
    tags: ['babys-breath', 'filler', 'bouquet', 'beginner', 'quick'],
    dateAdded: '2024-05-23',
    thumbnail: '/images/bbreath.jpeg',
    imageUrls: ['/images/bbreath.jpeg'],
    price: 200,
    youtubeId: 'RgJvZER-qwA',
    content: babysBreathContent,
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
    id: 'forget-me-not',
    title: 'Forget-Me-Not',
    difficulty: 'Beginner',
    flowerType: 'Filler',
    estimatedTime: '< 30 m',
    materials: ['Weight 4 yarn', '18-gauge floral wire', 'Glue'],
    hooks: ['3.75mm'],
    tags: ['forget-me-not', 'filler', 'bouquet', 'beginner', 'quick', 'cluster'],
    dateAdded: '2024-05-24',
    thumbnail: '/images/fgmn.jpeg',
    imageUrls: ['/images/fgmn.jpeg'],
    price: 250, // You can adjust this price as needed
    youtubeId: 'f86av7gWTd8',
    content: forgetMeNotContent,
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
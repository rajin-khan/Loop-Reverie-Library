// src/vite-env.d.ts

/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

// Add this interface
interface ImportMetaEnv {
  readonly VITE_APP_PASSWORD: string;
  // You can add definitions for other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
// src/pages/PatternLibrary.tsx
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PatternList from '../components/patterns/PatternList';

const PatternLibrary = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      {/* UPDATE: Add animation class */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Pattern Library</h1>
            <p className="text-foreground/70 mt-1">Hi Labbaiqua! Here's your collection of crochet patterns (Adding more soon!).</p>
        </div>
        <PatternList />
      </main>
      <Footer />
    </div>
  );
};

export default PatternLibrary;
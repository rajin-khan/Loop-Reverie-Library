// src/pages/PatternLibrary.tsx (Refactored)
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PatternList from '../components/patterns/PatternList';
import PriceListCopyButton from '../components/ui/PriceListCopyButton'; // Import the new component

const PatternLibrary = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Pattern Library</h1>
            <p className="text-foreground/70 mt-1">Hi Labbaiqua! Here's your collection of crochet patterns (Adding more soon!).</p>
          </div>
          <PriceListCopyButton />
        </div>
        <PatternList />
      </main>
      <Footer />
    </div>
  );
};

export default PatternLibrary;
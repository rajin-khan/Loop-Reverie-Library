// src/pages/PatternDetailView.tsx
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PatternDetail from '../components/patterns/PatternDetail';

const PatternDetailView = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      {/* UPDATE: Add animation class */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <PatternDetail />
      </main>
      <Footer />
    </div>
  );
};

export default PatternDetailView;
// src/components/patterns/PatternList.tsx
import { usePatterns } from '../../hooks/usePatterns';
import PatternCard from './PatternCard';

const PatternList = () => {
  const { getPatterns } = usePatterns();
  const patterns = getPatterns();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {/* UPDATE: Add animation properties */}
      {patterns.map((pattern, index) => (
        <div
          key={pattern.id}
          className="animate-slideInUp opacity-0"
          style={{ animationFillMode: 'forwards', animationDelay: `${index * 75}ms` }}
        >
          <PatternCard pattern={pattern} />
        </div>
      ))}
    </div>
  );
};

export default PatternList;
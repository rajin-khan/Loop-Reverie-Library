// src/components/patterns/PatternCard.tsx
import { Link } from 'react-router-dom';
import { Clock, BarChart3, Tag, CircleDollarSign } from 'lucide-react'; // Import new icon
import { type CrochetPattern } from '../../types';

interface PatternCardProps {
  pattern: CrochetPattern;
}

const PatternCard = ({ pattern }: PatternCardProps) => {
  const difficultyColor = {
    Beginner: 'bg-green-500/10 text-green-400',
    Intermediate: 'bg-yellow-500/10 text-yellow-400',
    Advanced: 'bg-red-500/10 text-red-400',
  };

  return (
    <Link 
      to={`/pattern/${pattern.id}`} 
      className="group block rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-2xl shadow-black/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-2"
    >
      <div className="relative">
        <img 
          src={pattern.thumbnail} 
          alt={pattern.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-xl font-bold">{pattern.title}</h3>
          <p className="text-white/80 text-sm">{pattern.flowerType}</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className={`px-2 py-1 rounded-full font-medium flex items-center gap-1 ${difficultyColor[pattern.difficulty]}`}>
            <BarChart3 size={12} /> {pattern.difficulty}
          </span>
          <span className="px-2 py-1 rounded-full font-medium flex items-center gap-1 bg-accent text-accent-foreground">
            <Clock size={12} /> {pattern.estimatedTime}
          </span>
          {/* NEW: Price Badge */}
          {pattern.price && (
            <span className="px-2 py-1 rounded-full font-medium flex items-center gap-1 bg-primary/10 text-primary">
              <CircleDollarSign size={12} /> ৳{pattern.price.toLocaleString('en-US')}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {pattern.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary flex items-center gap-1">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PatternCard;
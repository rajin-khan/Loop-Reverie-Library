// src/components/patterns/PatternDetail.tsx
import { useParams } from 'react-router-dom';
import { usePatterns } from '../../hooks/usePatterns';
import { ArrowLeft, Clock, BarChart3, Settings, CircleDollarSign } from 'lucide-react'; // Import new icon
import { Link } from 'react-router-dom';
import MarkdownRenderer from '../ui/MarkdownRenderer';
import YoutubeEmbed from '../ui/YoutubeEmbed';

const PatternDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getPatternById } = usePatterns();
  const pattern = getPatternById(id || '');

  if (!pattern) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Pattern not found</h2>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Back to Library
        </Link>
      </div>
    );
  }
  
  const difficultyColor = {
    Beginner: 'text-green-400',
    Intermediate: 'text-yellow-400',
    Advanced: 'text-red-400',
  };

  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8 group"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        Back to Pattern Library
      </Link>

      <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/20 border border-white/10">
        
        {pattern.imageUrls && pattern.imageUrls.length === 1 && (
          <img
            src={pattern.imageUrls[0]}
            alt={pattern.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
          />
        )}

        {pattern.imageUrls && pattern.imageUrls.length > 1 && (
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {pattern.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${pattern.title} - photo ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2">
          {pattern.title}
        </h1>
        <p className="text-lg text-foreground/70 mb-6">{pattern.flowerType}</p>
        
        {/* UPDATED: grid-cols to adapt better */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 text-sm border-y border-white/10 py-4">
          <div className="flex items-center gap-2">
            <BarChart3 size={20} className={difficultyColor[pattern.difficulty]} />
            <span className="font-semibold">{pattern.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-secondary" />
            <span className="font-semibold">{pattern.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings size={20} className="text-primary" />
            <span className="font-semibold">{pattern.hooks.join(', ')}</span>
          </div>
          {/* NEW: Price Metadata */}
          {pattern.price && (
            <div className="flex items-center gap-2">
              <CircleDollarSign size={20} className="text-primary" />
              <span className="font-semibold">৳{pattern.price.toLocaleString('en-US')}</span>
            </div>
          )}
        </div>

        {pattern.youtubeId && <YoutubeEmbed youtubeId={pattern.youtubeId} />}
        
        <MarkdownRenderer content={pattern.content} />
      </div>
    </div>
  );
};

export default PatternDetail;
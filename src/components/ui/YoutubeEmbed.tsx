// src/components/ui/YoutubeEmbed.tsx
interface YoutubeEmbedProps {
  youtubeId: string;
}

const YoutubeEmbed = ({ youtubeId }: YoutubeEmbedProps) => (
  <div className="my-8">
    <h3 className="text-xl text-secondary font-bold mb-4">Video Tutorial</h3>
    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-xl shadow-black/30 border border-white/10">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
);

export default YoutubeEmbed;
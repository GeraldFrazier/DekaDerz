// components/YouTubeVideo.tsx

interface YouTubeVideoProps {
    videoId: string;
  }
  
  const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeVideo;
  
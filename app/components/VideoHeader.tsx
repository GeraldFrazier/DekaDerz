'use client';

const VideoHeader = () => {
  const handleInstaClick = () => {
    window.location.href = 'https://www.instagram.com/dekaderse';
  };

  const handleYoutubeClick = () => {
    window.location.href = 'https://www.youtube.com/dekaderse';
  };

  const handleXclick = () => {
    window.location.href = 'https://www.x.com/dekaderse';
  };

  return (
    <>
      <div className="relative w-full h-64 lg:h-64 overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/buc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
   
    </>
  );
};

export default VideoHeader;

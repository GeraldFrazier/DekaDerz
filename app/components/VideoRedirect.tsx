'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const VideoRedirect = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        router.push('/soundcloud');
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup event listener on component unmount
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [router]);

  return (
    <div className="relative w-full h-64 lg:h-64 overflow-hidden m-0 p-0">
      <video ref={videoRef} autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/buc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoRedirect;

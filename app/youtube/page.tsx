"use client"
import { useEffect, useState } from 'react';

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

const YouTubeGrid = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      );
      const data = await response.json();
      setVideos(data.items);
    };

    fetchYouTubeVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My YouTube Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{video.snippet.title}</h2>
              <p className="text-gray-700 text-sm">{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeGrid;

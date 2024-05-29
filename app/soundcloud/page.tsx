import Link from "next/link";

const SoundCloudPlayer = () => {
  const tracks = [
    "https://api.soundcloud.com/tracks/1586388355",
    "https://api.soundcloud.com/tracks/1586388283",
    "https://api.soundcloud.com/tracks/1586388191",
    "https://api.soundcloud.com/tracks/1586388139",
    "https://api.soundcloud.com/tracks/1586388067",
    "https://api.soundcloud.com/tracks/1586387979",
    "https://api.soundcloud.com/tracks/1586387927",
    "https://api.soundcloud.com/tracks/1586387827",
    "https://api.soundcloud.com/tracks/1586387755",
    "https://api.soundcloud.com/tracks/15863877703",
    "https://api.soundcloud.com/tracks/1586387639",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tracks.map((track, index) => (
          <div key={index} className="text-gray-400 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis font-light font-sans">
            <iframe
              width="300"
              height="166"
              allow="autoplay"
              className="w-full h-full"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            ></iframe>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/youtube">
          <a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Videos
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;

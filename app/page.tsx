import VideoRedirect from './components/VideoRedirect';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen m-0 p-0">
      <header className="w-full">
        <h1 className="text-center text-2xl m-0 p-4">Welcome to My Website</h1>
      </header>
      <VideoRedirect />
    </div>
  );
}

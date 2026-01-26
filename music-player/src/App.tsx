// @ts-expect-error: implicit any from .jsx module without declaration file
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <MusicPlayer />
    </div>
  );
}

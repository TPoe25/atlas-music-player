import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  return (
   <div className="min-h-screen bg-niners-cream text-niners-black dark:bg-niners-night dark:text-niners-mist">
      <header className="mx-auto w-full max-w-[896px] px-6 pt-10 pb-4">
        <h1 className="text-3xl font-bold">Music Player</h1>
        <p className="mt-1 text-sm opacity-70">Atlas School</p>
      </header>

      <main className="mx-auto w-full max-w-[896px] px-6 pb-10">
        <MusicPlayer />
      </main>

      <footer className="border-t border-niners-black/10 dark:border-niners-mist/10 py-4">
        <div className="mx-auto w-full max-w-[896px] px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

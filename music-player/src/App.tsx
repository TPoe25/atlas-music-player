import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  return (
   <div className="min-h-screen bg-niners-gold/50 text-niners-black dark:bg-niners-night dark:text-niners-mist">

      <main className="mx-auto w-full max-w-4xl px-6 pb-10">
        <MusicPlayer />
      </main>

      <footer className="border-t border-niners-black/10 dark:border-niners-mist/10 py-4">
        <div className="mx-auto w-full max-w-4xl px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

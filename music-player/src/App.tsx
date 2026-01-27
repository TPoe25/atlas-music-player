import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-niners-cream min-h-screen">
      {/* Header */}
      <header className="mx-auto w-full max-w-[896px] px-6 pt-10 pb-4">
        <h1 className="text-niners-black text-3xl font-bold">Music Player</h1>
        <p className="text-niners-black/60 mt-1 text-sm">Atlas School</p>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-[896px] px-6 pb-10">
        <MusicPlayer />
      </main>

      {/* Footer */}
      <footer className="border-niners-black/10 border-t py-4">
        <div className="mx-auto w-full max-w-[896px] px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

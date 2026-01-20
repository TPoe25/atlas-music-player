import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="bg-white text-black p-4 rounded">
        App is rendering ✅
      </div>

    <MusicPlayer />
    <Footer />
    </div>
  );
}

export default App;

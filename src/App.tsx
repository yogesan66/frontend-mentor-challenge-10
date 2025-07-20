import "./App.css";
import Navbar from "./components/Navbar";
import FeaturedArticles from "./components/FeaturedArticles";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full relative min-h-screen bg-offWhite flex justify-center p-4 md:p-6 items-center">
      <div className="w-full max-w-[1115px] flex flex-col gap-10 md:gap-14">
        <Navbar />
        <HeroSection />
        <FeaturedArticles />
        <Footer />
      </div>
    </div>
  );
}

export default App;

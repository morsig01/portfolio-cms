import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <Footer />
    </div>
  );
}
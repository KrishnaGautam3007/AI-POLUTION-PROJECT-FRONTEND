import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";
import { ChatbotWidget } from "./components/ChatbotWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ImpactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
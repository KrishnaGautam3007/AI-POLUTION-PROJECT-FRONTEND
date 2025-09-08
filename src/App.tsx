import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { Dashboard } from "./components/Dashboard";
import { RiskAlerts } from "./components/RiskAlerts";
import { CheckWaterSafety } from "./components/CheckWaterSafety";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard" | "risk-alerts" | "check-water-safety">("home");

  if (currentPage === "dashboard") {
    return (
      <Dashboard 
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
        onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
      />
    );
  }

  if (currentPage === "risk-alerts") {
    return (
      <RiskAlerts 
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToDashboard={() => setCurrentPage("dashboard")}
        onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
      />
    );
  }

  if (currentPage === "check-water-safety") {
    return (
      <CheckWaterSafety 
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToDashboard={() => setCurrentPage("dashboard")}
        onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onNavigateToDashboard={() => setCurrentPage("dashboard")}
        onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
        onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
      />
      <main>
        <HeroSection onNavigateToDashboard={() => setCurrentPage("dashboard")} />
        <FeaturesSection />
        <ImpactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
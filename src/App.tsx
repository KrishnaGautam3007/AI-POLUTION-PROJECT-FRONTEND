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
import { Reports } from "./components/Reports";
import { ContributeData } from "./components/ContributeData";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard" | "risk-alerts" | "check-water-safety" | "reports" | "contribute-data">("home");

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <Dashboard 
            onNavigateToHome={() => setCurrentPage("home")}
            onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
            onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
            onNavigateToReports={() => setCurrentPage("reports")}
            onNavigateToContributeData={() => setCurrentPage("contribute-data")}
          />
        );
      case "risk-alerts":
        return (
          <RiskAlerts 
            onNavigateToHome={() => setCurrentPage("home")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
            onNavigateToReports={() => setCurrentPage("reports")}
            onNavigateToContributeData={() => setCurrentPage("contribute-data")}
          />
        );
      case "check-water-safety":
        return (
          <CheckWaterSafety 
            onNavigateToHome={() => setCurrentPage("home")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
            onNavigateToReports={() => setCurrentPage("reports")}
            onNavigateToContributeData={() => setCurrentPage("contribute-data")}
          />
        );
      case "reports":
        return (
          <Reports 
            onNavigateToHome={() => setCurrentPage("home")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
            onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
            onNavigateToContributeData={() => setCurrentPage("contribute-data")}
          />
        );
      case "contribute-data":
        return (
          <ContributeData 
            onNavigateToHome={() => setCurrentPage("home")}
            onNavigateToDashboard={() => setCurrentPage("dashboard")}
            onNavigateToRiskAlerts={() => setCurrentPage("risk-alerts")}
            onNavigateToCheckWaterSafety={() => setCurrentPage("check-water-safety")}
            onNavigateToReports={() => setCurrentPage("reports")}
          />
        );
      default:
        return (
          <div>
            {/* Home Page Navigation */}
            <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex items-center space-x-2 flex-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">H</span>
                    </div>
                    <span className="text-xl text-slate-800">HMPI System</span>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</span>
                    <button 
                      onClick={() => setCurrentPage("dashboard")} 
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      Dashboard
                    </button>
                    <button 
                      onClick={() => setCurrentPage("risk-alerts")} 
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      Risk Alerts
                    </button>
                    <button 
                      onClick={() => setCurrentPage("check-water-safety")}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      Check Water Safety
                    </button>
                    <button 
                      onClick={() => setCurrentPage("reports")} 
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      Reports
                    </button>
                    <button 
                      onClick={() => setCurrentPage("contribute-data")} 
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      Contribute Data
                    </button>
                    <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About Us</a>
                  </div>
                </div>
              </div>
            </nav>
            
            <main>
              <HeroSection onNavigateToDashboard={() => setCurrentPage("dashboard")} />
              <FeaturesSection />
              <ImpactSection />
            </main>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPageContent()}
      {currentPage === "home" && <Footer />}
      <ChatbotWidget />
    </div>
  );
}
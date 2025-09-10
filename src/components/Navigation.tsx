import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: "home" | "dashboard" | "risk-alerts" | "check-water-safety" | "reports" | "contribute-data";
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToRiskAlerts?: () => void;
  onNavigateToCheckWaterSafety?: () => void;
  onNavigateToReports?: () => void;
  onNavigateToContributeData?: () => void;
}

export function Navigation({ 
  currentPage, 
  onNavigateToHome, 
  onNavigateToDashboard, 
  onNavigateToRiskAlerts, 
  onNavigateToCheckWaterSafety, 
  onNavigateToReports, 
  onNavigateToContributeData 
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavItemClass = (page: string) => {
    return currentPage === page 
      ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
      : "text-slate-700 hover:text-blue-600 transition-colors";
  };

  return (
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
            <button 
              onClick={onNavigateToHome}
              className={getNavItemClass("home")}
            >
              Home
            </button>
            <button 
              onClick={onNavigateToDashboard} 
              className={getNavItemClass("dashboard")}
            >
              Dashboard
            </button>
            <button 
              onClick={onNavigateToRiskAlerts} 
              className={getNavItemClass("risk-alerts")}
            >
              Risk Alerts
            </button>
            <button 
              onClick={onNavigateToCheckWaterSafety}
              className={getNavItemClass("check-water-safety")}
            >
              Check Water Safety
            </button>
            <button 
              onClick={onNavigateToReports} 
              className={getNavItemClass("reports")}
            >
              Reports
            </button>
            <button 
              onClick={onNavigateToContributeData} 
              className={getNavItemClass("contribute-data")}
            >
              Contribute Data
            </button>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About Us</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-100 py-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={onNavigateToHome}
                className={`${getNavItemClass("home")} px-2 py-1 text-left`}
              >
                Home
              </button>
              <button 
                onClick={onNavigateToDashboard} 
                className={`${getNavItemClass("dashboard")} px-2 py-1 text-left`}
              >
                Dashboard
              </button>
              <button 
                onClick={onNavigateToRiskAlerts} 
                className={`${getNavItemClass("risk-alerts")} px-2 py-1 text-left`}
              >
                Risk Alerts
              </button>
              <button 
                onClick={onNavigateToCheckWaterSafety}
                className={`${getNavItemClass("check-water-safety")} px-2 py-1 text-left`}
              >
                Check Water Safety
              </button>
              <button 
                onClick={onNavigateToReports} 
                className={`${getNavItemClass("reports")} px-2 py-1 text-left`}
              >
                Reports
              </button>
              <button 
                onClick={onNavigateToContributeData} 
                className={`${getNavItemClass("contribute-data")} px-2 py-1 text-left`}
              >
                Contribute Data
              </button>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">About Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
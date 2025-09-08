import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#dashboard" className="text-slate-700 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#alerts" className="text-slate-700 hover:text-blue-600 transition-colors">Risk Alerts</a>
            <a href="#reports" className="text-slate-700 hover:text-blue-600 transition-colors">Reports</a>
            <a href="#contribute" className="text-slate-700 hover:text-blue-600 transition-colors">Contribute Data</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About Us</a>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
              Check Water Safety
            </Button>
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
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">Home</a>
              <a href="#dashboard" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">Dashboard</a>
              <a href="#alerts" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">Risk Alerts</a>
              <a href="#reports" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">Reports</a>
              <a href="#contribute" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">Contribute Data</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors px-2 py-1">About Us</a>
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 mt-2">
                Check Water Safety
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
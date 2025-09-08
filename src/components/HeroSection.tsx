import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1586398251212-c060912c38cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwcG9sbHV0aW9uJTIwdHJhbnNpdGlvbnxlbnwxfHx8fDE3NTczNDg4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Clean water transitioning to polluted water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-green-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
              AI-Powered Heavy Metal Pollution Monitoring
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Protecting public health through real-time water quality analysis, intelligent risk prediction, and actionable insights for decision makers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8">
                Check Water Safety Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8">
                View Live Dashboard
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-lg p-2">
                <Search className="h-5 w-5 text-slate-500 ml-2" />
                <Input
                  placeholder="Is my area's water safe?"
                  className="border-0 bg-transparent text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 ml-2">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Ask AI
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl mb-4 text-slate-800">Real-Time Water Quality Index</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">Downtown Area</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Heavy metal index: 0.23</p>
                </div>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">SAFE</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">Industrial Zone</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Heavy metal index: 0.67</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">MODERATE</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-700">Mining District</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Heavy metal index: 0.94</p>
                </div>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">UNSAFE</span>
              </div>
            </div>
            
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              View Full Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
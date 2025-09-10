import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { 
  Search, 
  MapPin, 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX,
  Droplets, 
  Upload, 
  Download, 
  AlertTriangle, 
  CheckCircle, 
  MessageCircle,
  Users,
  FileText,
  Star,
  TrendingUp,
  Heart,
  Eye,
  ChevronRight,
  Bot,
  Send,
  X
} from 'lucide-react';
import { useState } from 'react';

// Mock data for water safety results
const sampleResult = {
  location: "New Delhi, India",
  coordinates: { lat: 28.6139, lng: 77.2090 },
  safetyStatus: "moderate",
  confidenceScore: 85,
  heavyMetalIndex: 2.3,
  lastUpdated: "2024-12-19T10:30:00Z",
  topMetals: [
    { name: "Lead", value: 0.8, limit: 1.0, status: "safe", unit: "mg/L" },
    { name: "Mercury", value: 0.3, limit: 0.5, status: "safe", unit: "mg/L" },
    { name: "Cadmium", value: 1.2, limit: 1.0, status: "warning", unit: "mg/L" },
    { name: "Arsenic", value: 0.6, limit: 1.5, status: "safe", unit: "mg/L" }
  ],
  nearbyAreas: [
    { name: "Central Delhi", distance: "2.5 km", status: "safe", score: 92 },
    { name: "East Delhi", distance: "5.2 km", status: "warning", score: 68 },
    { name: "South Delhi", distance: "8.1 km", status: "safe", score: 89 },
    { name: "West Delhi", distance: "6.3 km", status: "moderate", score: 75 }
  ]
};

interface CheckWaterSafetyProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToRiskAlerts?: () => void;
  onNavigateToReports?: () => void;
  onNavigateToContributeData?: () => void;
}

export function CheckWaterSafety({ 
  onNavigateToHome, 
  onNavigateToDashboard, 
  onNavigateToRiskAlerts, 
  onNavigateToReports,
  onNavigateToContributeData
}: CheckWaterSafetyProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: 'Hi! I can help you check water safety in your area. Try asking "Is water safe in Delhi today?" or "What are the mercury levels in my area?"' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [contributionForm, setContributionForm] = useState({
    location: "",
    testDate: "",
    metalType: "",
    testValue: "",
    testingOrg: "",
    notes: ""
  });

  const handleSearch = () => {
    if (searchLocation.trim()) {
      setShowResults(true);
    }
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, 
        { type: 'user', content: chatInput },
        { type: 'bot', content: `Based on the latest data, water in ${searchLocation || 'your area'} has a moderate safety rating with elevated cadmium levels. I recommend using a water filter and checking back in 24 hours for updates.` }
      ]);
      setChatInput("");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <ShieldCheck className="h-6 w-6 text-green-500" />;
      case 'moderate':
        return <ShieldAlert className="h-6 w-6 text-yellow-500" />;
      case 'warning':
        return <ShieldAlert className="h-6 w-6 text-orange-500" />;
      case 'unsafe':
        return <ShieldX className="h-6 w-6 text-red-500" />;
      default:
        return <Shield className="h-6 w-6 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'warning':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'unsafe':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getMetalStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'text-green-600';
      case 'warning':
        return 'text-orange-600';
      case 'unsafe':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50">
      {/* Header Navigation */}
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
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={onNavigateToDashboard}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={onNavigateToRiskAlerts}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Risk Alerts
              </button>
              <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Check Water Safety</span>
              <button 
                onClick={onNavigateToReports}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Reports
              </button>
              <button 
                onClick={onNavigateToContributeData}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Contribute Data
              </button>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6">
            <Droplets className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Is Your Water Safe?
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Get instant water quality insights for your location. Our AI analyzes real-time data to keep your family safe.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      placeholder="Enter your location, city, or pin code..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-12 bg-white border-slate-300 focus:border-blue-500 rounded-xl"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 rounded-xl"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Check Safety
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-8 mb-12">
            {/* Main Result Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(sampleResult.safetyStatus)}
                    <div>
                      <h2 className="text-2xl mb-1">Water Safety Report</h2>
                      <p className="text-blue-100">{sampleResult.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getStatusColor(sampleResult.safetyStatus)} text-lg px-4 py-2`}>
                      {sampleResult.safetyStatus.charAt(0).toUpperCase() + sampleResult.safetyStatus.slice(1)}
                    </Badge>
                    <p className="text-sm text-blue-100 mt-2">
                      Confidence: {sampleResult.confidenceScore}%
                    </p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-slate-800">{sampleResult.heavyMetalIndex}</div>
                    <p className="text-sm text-slate-600">Heavy Metal Index</p>
                    <Progress value={sampleResult.heavyMetalIndex * 20} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-blue-600">{sampleResult.confidenceScore}%</div>
                    <p className="text-sm text-slate-600">AI Confidence</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(sampleResult.confidenceScore/20) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-green-600">
                      <CheckCircle className="h-8 w-8 mx-auto" />
                    </div>
                    <p className="text-sm text-slate-600">Last Updated</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Date(sampleResult.lastUpdated).toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                    Metal Detection Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sampleResult.topMetals.map((metal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          metal.status === 'safe' ? 'bg-green-500' : 
                          metal.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="text-sm">{metal.name}</div>
                          <div className="text-xs text-slate-500">
                            Limit: {metal.limit} {metal.unit}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm ${getMetalStatusColor(metal.status)}`}>
                          {metal.value} {metal.unit}
                        </div>
                        <div className="text-xs text-slate-500">
                          {((metal.value / metal.limit) * 100).toFixed(1)}% of limit
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Nearby Areas Map */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-500" />
                    Nearby Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleResult.nearbyAreas.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(area.status)}
                        <div>
                          <div className="text-sm">{area.name}</div>
                          <div className="text-xs text-slate-500">{area.distance}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-slate-600">{area.score}%</div>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Unsafe Water
              </Button>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-xl">
                <Download className="h-4 w-4 mr-2" />
                Download Safety Report
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-3 rounded-xl">
                <Eye className="h-4 w-4 mr-2" />
                View Detailed Analysis
              </Button>
            </div>
          </div>
        )}

        {/* Community Contribution Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-green-500" />
              Community Contribution
            </CardTitle>
            <p className="text-sm text-slate-600">
              Help improve water safety data by sharing your test results
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter location"
                  value={contributionForm.location}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, location: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="testDate">Test Date</Label>
                <Input
                  id="testDate"
                  type="date"
                  value={contributionForm.testDate}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, testDate: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="metalType">Metal Type</Label>
                <Input
                  id="metalType"
                  placeholder="e.g., Lead, Mercury"
                  value={contributionForm.metalType}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, metalType: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="testValue">Test Value (mg/L)</Label>
                <Input
                  id="testValue"
                  placeholder="e.g., 0.5"
                  value={contributionForm.testValue}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, testValue: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="testingOrg">Testing Organization</Label>
                <Input
                  id="testingOrg"
                  placeholder="e.g., Local NGO, Government Lab"
                  value={contributionForm.testingOrg}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, testingOrg: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information..."
                  value={contributionForm.notes}
                  onChange={(e) => setContributionForm(prev => ({ ...prev, notes: e.target.value }))}
                  className="bg-white rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <Button variant="outline" className="rounded-xl">
                <FileText className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl">
                <Upload className="h-4 w-4 mr-2" />
                Submit Contribution
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Impact */}
        <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl mb-4">Community Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">1,247</div>
                <p className="text-blue-100">Water Tests Submitted</p>
              </div>
              <div>
                <div className="text-3xl mb-2">89%</div>
                <p className="text-blue-100">Accuracy Improvement</p>
              </div>
              <div>
                <div className="text-3xl mb-2">156</div>
                <p className="text-blue-100">Communities Helped</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <Card className="w-80 h-96 bg-white/95 backdrop-blur-lg border-blue-200 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Water Safety Assistant</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 h-64">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-200">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about water safety..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                  className="flex-1 bg-white rounded-xl"
                />
                <Button 
                  onClick={handleChatSend}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Button 
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full w-14 h-14 shadow-2xl animate-pulse"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { 
  FileText, 
  TrendingUp, 
  Calendar, 
  Settings, 
  Download, 
  Filter, 
  BarChart3, 
  AlertTriangle,
  Shield,
  MapPin
} from "lucide-react";

interface ReportsProps {
  onNavigateToHome: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToRiskAlerts: () => void;
  onNavigateToCheckWaterSafety: () => void;
  onNavigateToContributeData: () => void;
}

export function Reports({ onNavigateToHome, onNavigateToDashboard, onNavigateToRiskAlerts, onNavigateToCheckWaterSafety, onNavigateToContributeData }: ReportsProps) {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedReportType, setSelectedReportType] = useState("all");
  const [dateRange, setDateRange] = useState("30");

  // Mock data for charts
  const contaminationTrends = [
    { month: "Jan", lead: 2.1, mercury: 0.8, arsenic: 1.2 },
    { month: "Feb", lead: 1.9, mercury: 0.7, arsenic: 1.1 },
    { month: "Mar", lead: 2.3, mercury: 0.9, arsenic: 1.4 },
    { month: "Apr", lead: 2.0, mercury: 0.6, arsenic: 1.0 },
    { month: "May", lead: 1.8, mercury: 0.5, arsenic: 0.9 },
    { month: "Jun", lead: 1.6, mercury: 0.4, arsenic: 0.8 }
  ];

  const riskDistribution = [
    { name: "Safe", value: 65, color: "#16a34a" },
    { name: "Moderate Risk", value: 25, color: "#eab308" },
    { name: "High Risk", value: 10, color: "#dc2626" }
  ];

  const regionData = [
    { region: "North", reports: 45, avgRisk: 2.1 },
    { region: "South", reports: 38, avgRisk: 1.8 },
    { region: "East", reports: 52, avgRisk: 2.4 },
    { region: "West", reports: 41, avgRisk: 1.9 }
  ];

  const reportCards = [
    {
      id: "daily",
      title: "Daily Safety Report",
      description: "Real-time water quality analysis with immediate safety recommendations",
      icon: Shield,
      preview: "Latest: 89% safe zones detected",
      lastGenerated: "2 hours ago",
      status: "Ready",
      color: "bg-green-50 border-green-200"
    },
    {
      id: "weekly",
      title: "Weekly Risk Analysis",
      description: "Comprehensive weekly trends and risk assessment patterns",
      icon: TrendingUp,
      preview: "Trend: 12% improvement in water quality",
      lastGenerated: "1 day ago",
      status: "Ready",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: "monthly",
      title: "Monthly Trend Report",
      description: "Detailed monthly analysis with policy recommendations",
      icon: BarChart3,
      preview: "Analysis: 156 data points processed",
      lastGenerated: "3 days ago",
      status: "Ready",
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: "custom",
      title: "Custom Report Generator",
      description: "Generate tailored reports based on specific parameters",
      icon: Settings,
      preview: "Configure your custom analysis",
      lastGenerated: "On demand",
      status: "Configure",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <button 
                onClick={onNavigateToCheckWaterSafety}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Check Water Safety
              </button>
              <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Reports</span>
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">AI-Generated Policy & Safety Reports</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive analysis and insights powered by artificial intelligence to support policy decisions and public safety
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <Card className="mb-8 border-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              Filter & Search Reports
            </CardTitle>
            <CardDescription>
              Customize your report parameters to get the most relevant insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block mb-2 text-gray-700">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="north">North Region</SelectItem>
                    <SelectItem value="south">South Region</SelectItem>
                    <SelectItem value="east">East Region</SelectItem>
                    <SelectItem value="west">West Region</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">Date Range</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 3 months</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">Report Type</label>
                <Select value={selectedReportType} onValueChange={setSelectedReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="safety">Safety Reports</SelectItem>
                    <SelectItem value="risk">Risk Analysis</SelectItem>
                    <SelectItem value="trend">Trend Reports</SelectItem>
                    <SelectItem value="policy">Policy Reports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2 text-gray-700">Search</label>
                <Input placeholder="Search reports..." className="bg-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reportCards.map((report) => {
            const IconComponent = report.icon;
            return (
              <Card key={report.id} className={`${report.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                    <Badge variant={report.status === "Ready" ? "default" : "secondary"}>
                      {report.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {report.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{report.preview}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Last: {report.lastGenerated}</span>
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      size="sm"
                      disabled={report.status === "Configure"}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {report.status === "Configure" ? "Configure" : "Download PDF"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Visual Summary Panel */}
        <Card className="mb-8 border-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Visual Summary Dashboard
            </CardTitle>
            <CardDescription>
              Real-time contamination trends and risk distribution before generating detailed reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contamination Trends */}
              <div className="lg:col-span-2">
                <h3 className="mb-4">Heavy Metal Contamination Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={contaminationTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="lead" stroke="#dc2626" strokeWidth={2} name="Lead (ppm)" />
                    <Line type="monotone" dataKey="mercury" stroke="#ea580c" strokeWidth={2} name="Mercury (ppm)" />
                    <Line type="monotone" dataKey="arsenic" stroke="#0891b2" strokeWidth={2} name="Arsenic (ppm)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Risk Distribution */}
              <div>
                <h3 className="mb-4">Current Risk Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={riskDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {riskDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Regional Reports Summary */}
            <div className="mt-6">
              <h3 className="mb-4">Regional Reports Summary</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="region" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="reports" fill="#2563eb" name="Reports Generated" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Safe Zones</span>
                </div>
                <p className="text-2xl text-green-700 mt-2">65%</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-800">Watch Zones</span>
                </div>
                <p className="text-2xl text-yellow-700 mt-2">25%</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">Risk Zones</span>
                </div>
                <p className="text-2xl text-red-700 mt-2">10%</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800">Locations</span>
                </div>
                <p className="text-2xl text-blue-700 mt-2">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generate New Report CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
          <CardContent className="py-8">
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl mb-2">Need a Custom Report?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Generate tailored reports with specific parameters, custom date ranges, and detailed analysis 
                for your organization's unique requirements.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Settings className="w-5 h-5 mr-2" />
                Generate New Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
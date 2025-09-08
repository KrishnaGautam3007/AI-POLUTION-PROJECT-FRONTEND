import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Brain, 
  Eye, 
  MapPin, 
  Gamepad2, 
  FileText, 
  Upload, 
  Satellite, 
  MessageSquare,
  TrendingUp,
  Shield,
  Download,
  Globe
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const trendData = [
  { month: 'Jan', contamination: 0.3, prediction: 0.35 },
  { month: 'Feb', contamination: 0.4, prediction: 0.42 },
  { month: 'Mar', contamination: 0.35, prediction: 0.38 },
  { month: 'Apr', contamination: 0.5, prediction: 0.52 },
  { month: 'May', contamination: 0.45, prediction: 0.48 },
  { month: 'Jun', contamination: 0.6, prediction: 0.62 }
];

const metalContribution = [
  { name: 'Lead', value: 35, color: '#dc2626' },
  { name: 'Mercury', value: 25, color: '#ea580c' },
  { name: 'Cadmium', value: 20, color: '#ca8a04' },
  { name: 'Arsenic', value: 15, color: '#059669' },
  { name: 'Others', value: 5, color: '#6366f1' }
];

export function FeaturesSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-slate-800">
            Comprehensive AI-Powered Water Monitoring
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced technology meets environmental protection through intelligent analysis, real-time monitoring, and actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* AI-Based Risk Prediction */}
          <Card className="col-span-full xl:col-span-2 border-blue-200 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 hover:border-blue-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">AI-Based Risk Prediction</CardTitle>
              </div>
              <CardDescription>
                Machine learning models predict contamination trends and identify potential risks before they occur.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="contamination" stroke="#dc2626" strokeWidth={3} name="Actual" />
                    <Line type="monotone" dataKey="prediction" stroke="#2563eb" strokeWidth={3} strokeDasharray="5 5" name="AI Prediction" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-blue-700">
                <TrendingUp className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                View Detailed Predictions
              </Button>
            </CardContent>
          </Card>

          {/* AI Explainability */}
          <Card className="border-green-200 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-2 hover:border-green-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">AI Explainability</CardTitle>
              </div>
              <CardDescription>
                Understand which heavy metals contribute most to pollution levels in your area.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={metalContribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {metalContribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {metalContribution.slice(0, 3).map((metal) => (
                  <div key={metal.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: metal.color }}></div>
                      <span>{metal.name}</span>
                    </div>
                    <span>{metal.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Risk Alerts */}
          <Card className="border-red-200 hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-2 hover:border-red-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-600">Regional Risk Alerts</CardTitle>
              </div>
              <CardDescription>
                Interactive map showing real-time safety status across different regions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 mb-4 min-h-32 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">Interactive Risk Map</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Safe Zones</span>
                  <Badge className="bg-green-500">23 areas</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risk Zones</span>
                  <Badge className="bg-red-500">5 areas</Badge>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-red-700">
                <Shield className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                View Risk Map
              </Button>
            </CardContent>
          </Card>

          {/* Gamified Awareness Map */}
          <Card className="border-purple-200 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 hover:border-purple-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-600">Gamified Awareness Map</CardTitle>
              </div>
              <CardDescription>
                Earn badges and rewards by exploring and learning about water quality in different regions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-yellow-100 rounded-lg p-2 text-center">
                  <div className="text-2xl mb-1">🏆</div>
                  <p className="text-xs">Explorer</p>
                </div>
                <div className="bg-green-100 rounded-lg p-2 text-center">
                  <div className="text-2xl mb-1">🌊</div>
                  <p className="text-xs">Guardian</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-2 text-center">
                  <div className="text-2xl mb-1">🔬</div>
                  <p className="text-xs">Scientist</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">You've earned 3 badges! Explore more regions to unlock achievements.</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-purple-700">
                Start Exploring
              </Button>
            </CardContent>
          </Card>

          {/* AI-Generated Policy Reports */}
          <Card className="border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 hover:border-indigo-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-indigo-600" />
                <CardTitle className="text-indigo-600">AI-Generated Policy Reports</CardTitle>
              </div>
              <CardDescription>
                Automated generation of comprehensive policy recommendations and compliance reports.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span className="text-sm">Q3 2024 Report</span>
                  <Badge variant="outline">Ready</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span className="text-sm">Risk Assessment</span>
                  <Badge variant="outline">Processing</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <span className="text-sm">Policy Brief</span>
                  <Badge variant="outline">Ready</Badge>
                </div>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-indigo-700">
                <Download className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Download Reports
              </Button>
            </CardContent>
          </Card>

          {/* Crowdsourced Data Upload */}
          <Card className="border-orange-200 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 hover:border-orange-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Upload className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-600">Crowdsourced Data Upload</CardTitle>
              </div>
              <CardDescription>
                Citizens and NGOs can contribute water test results to improve monitoring accuracy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center mb-4">
                <Upload className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600">Drag & drop test results</p>
              </div>
              <div className="text-sm text-slate-600 mb-4">
                <p>Recent uploads: 47 test results this week</p>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-orange-700">
                Upload Test Data
              </Button>
            </CardContent>
          </Card>

          {/* Satellite Data Fusion */}
          <Card className="col-span-full lg:col-span-1 xl:col-span-2 border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100 hover:-translate-y-2 hover:border-cyan-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Satellite className="h-6 w-6 text-cyan-600" />
                <CardTitle className="text-cyan-600">Satellite Data Fusion</CardTitle>
              </div>
              <CardDescription>
                Combining satellite imagery with ground-based sensors for comprehensive environmental monitoring.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Satellite Coverage</span>
                    <Badge className="bg-cyan-500">98.7%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Sources</span>
                    <Badge className="bg-cyan-500">15 active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Update Frequency</span>
                    <Badge className="bg-cyan-500">6 hours</Badge>
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-cyan-700">
                    View Satellite Data
                  </Button>
                </div>
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1606834230438-f3b80fe1ae4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNTc3MzQ0NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Satellite monitoring"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Chatbot Assistant */}
          <Card className="border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 hover:border-emerald-300 transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-emerald-600" />
                <CardTitle className="text-emerald-600">AI Chatbot Assistant</CardTitle>
              </div>
              <CardDescription>
                Get instant answers about water quality, safety guidelines, and environmental data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-sm text-slate-600">💬 "Is the water safe in my area?"</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-emerald-800">🤖 "Based on recent data, your area shows safe levels. Latest HMPI: 0.23"</p>
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group-hover:bg-emerald-700">
                <MessageSquare className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Chat with AI Assistant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
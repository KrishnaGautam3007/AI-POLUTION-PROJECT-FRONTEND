import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Download, Droplets, Activity, Shield, AlertTriangle, MapPin, TrendingUp, BarChart3 } from 'lucide-react';

// Mock data for the dashboard
const trendData = [
  { month: 'Jan', lead: 2.1, mercury: 0.8, cadmium: 1.2, arsenic: 1.5 },
  { month: 'Feb', lead: 2.3, mercury: 0.9, cadmium: 1.1, arsenic: 1.4 },
  { month: 'Mar', lead: 2.8, mercury: 1.2, cadmium: 1.4, arsenic: 1.8 },
  { month: 'Apr', lead: 3.2, mercury: 1.5, cadmium: 1.6, arsenic: 2.1 },
  { month: 'May', lead: 3.8, mercury: 1.8, cadmium: 1.9, arsenic: 2.4 },
  { month: 'Jun', lead: 4.1, mercury: 2.1, cadmium: 2.2, arsenic: 2.8 },
];

const metalContribution = [
  { metal: 'Lead', contribution: 45, color: '#dc2626' },
  { metal: 'Mercury', contribution: 28, color: '#ea580c' },
  { metal: 'Cadmium', contribution: 18, color: '#eab308' },
  { metal: 'Arsenic', contribution: 9, color: '#16a34a' },
];

const regionData = [
  { region: 'North District', status: 'Safe', riskLevel: 25, color: '#16a34a' },
  { region: 'East District', status: 'Warning', riskLevel: 65, color: '#eab308' },
  { region: 'South District', status: 'Danger', riskLevel: 85, color: '#dc2626' },
  { region: 'West District', status: 'Safe', riskLevel: 35, color: '#16a34a' },
];

export function Dashboard() {
  const overallWaterQuality = 72; // Overall quality score
  const currentPH = 6.8;
  const hmpiScore = 3.2;
  const safetyStatus = hmpiScore < 2.0 ? 'Safe' : hmpiScore < 4.0 ? 'Warning' : 'Danger';
  const statusColor = safetyStatus === 'Safe' ? 'bg-green-500' : safetyStatus === 'Warning' ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">H</span>
              </div>
              <span className="text-xl text-slate-800">HMPI Dashboard</span>
            </div>
            
            <nav className="flex space-x-8">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Dashboard</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Risk Alerts</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Check Water Safety</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Reports</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contribute Data</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Section */}
        <div className="mb-8">
          <h1 className="text-3xl text-slate-800 mb-6">Water Quality Overview</h1>
          
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl text-slate-800 mb-2">Overall Water Quality Index</h2>
                  <p className="text-slate-600 mb-4">Real-time assessment based on AI analysis</p>
                  
                  <div className="flex items-center space-x-6">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={overallWaterQuality > 70 ? "#16a34a" : overallWaterQuality > 40 ? "#eab308" : "#dc2626"}
                          strokeWidth="2"
                          strokeDasharray={`${overallWaterQuality}, 100`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">{overallWaterQuality}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-lg text-slate-800">Water Quality Status</div>
                      <Badge className={`${statusColor} text-white px-3 py-1 mt-2`}>
                        {safetyStatus}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Droplets className="w-24 h-24 text-blue-400 opacity-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* pH Level */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm text-muted-foreground">pH Level</CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{currentPH}</div>
              <p className="text-xs text-muted-foreground">
                Normal range: 6.5-8.5
              </p>
              <Progress value={(currentPH - 6.5) / 2 * 100} className="mt-2" />
            </CardContent>
          </Card>

          {/* Heavy Metal Index */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm text-muted-foreground">Heavy Metal Index</CardTitle>
              <BarChart3 className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{hmpiScore}</div>
              <p className="text-xs text-muted-foreground">
                Higher values indicate more contamination
              </p>
              <Progress value={hmpiScore / 5 * 100} className="mt-2" />
            </CardContent>
          </Card>

          {/* Safety Status */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm text-muted-foreground">Safety Status</CardTitle>
              <Shield className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl ${safetyStatus === 'Safe' ? 'text-green-600' : safetyStatus === 'Warning' ? 'text-yellow-600' : 'text-red-600'}`}>
                {safetyStatus}
              </div>
              <p className="text-xs text-muted-foreground">
                Based on AI analysis of all factors
              </p>
              <Badge className={`${statusColor} text-white mt-2`}>
                {safetyStatus === 'Safe' ? 'Drinking Safe' : safetyStatus === 'Warning' ? 'Use Caution' : 'Avoid Contact'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trend Graph */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                Contamination Trends
              </CardTitle>
              <p className="text-sm text-muted-foreground">Heavy metal concentrations over time (mg/L)</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line type="monotone" dataKey="lead" stroke="#dc2626" strokeWidth={2} dot={{ fill: '#dc2626' }} />
                  <Line type="monotone" dataKey="mercury" stroke="#ea580c" strokeWidth={2} dot={{ fill: '#ea580c' }} />
                  <Line type="monotone" dataKey="cadmium" stroke="#eab308" strokeWidth={2} dot={{ fill: '#eab308' }} />
                  <Line type="monotone" dataKey="arsenic" stroke="#16a34a" strokeWidth={2} dot={{ fill: '#16a34a' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* AI Explainability Panel */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-purple-500" />
                AI Pollution Analysis
              </CardTitle>
              <p className="text-sm text-muted-foreground">Metal contribution to overall pollution score</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={metalContribution} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="metal" type="category" stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    formatter={(value) => [`${value}%`, 'Contribution']}
                  />
                  <Bar dataKey="contribution" fill="#8884d8" radius={[0, 4, 4, 0]}>
                    {metalContribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Regional Map and Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regional Risk Map */}
          <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                Regional Risk Assessment
              </CardTitle>
              <p className="text-sm text-muted-foreground">Interactive map showing water safety across regions</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: region.color }}></div>
                      <div>
                        <div className="text-sm">{region.region}</div>
                        <div className="text-xs text-muted-foreground">Risk Level: {region.riskLevel}%</div>
                      </div>
                    </div>
                    <Badge 
                      className={`${region.status === 'Safe' ? 'bg-green-100 text-green-800' : 
                                   region.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' : 
                                   'bg-red-100 text-red-800'}`}
                    >
                      {region.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <AlertTriangle className="h-4 w-4 inline mr-1" />
                  Click on any region for detailed contamination analysis and recommendations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Download Report Section */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Generate Report</CardTitle>
              <p className="text-sm text-muted-foreground">Download comprehensive analysis</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm">Report includes:</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Complete water quality analysis</li>
                  <li>• AI predictions and trends</li>
                  <li>• Regional risk assessments</li>
                  <li>• Recommended actions</li>
                  <li>• Historical data comparison</li>
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <div className="text-xs text-muted-foreground mb-2">Report generated on:</div>
                <div className="text-sm">{new Date().toLocaleDateString()}</div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                Download PDF Report
              </Button>
              
              <Button variant="outline" className="w-full hover:bg-slate-50">
                <Download className="h-4 w-4 mr-2" />
                Download Raw Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
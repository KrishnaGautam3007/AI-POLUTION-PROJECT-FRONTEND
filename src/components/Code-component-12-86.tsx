import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Filter, 
  Bell, 
  Phone, 
  FileText, 
  Droplets,
  Wind,
  Factory,
  TrendingUp,
  Search,
  AlertOctagon,
  Shield,
  Zap
} from 'lucide-react';
import { useState } from 'react';

// Mock data for alerts
const alertsData = [
  {
    id: 1,
    severity: 'critical',
    region: 'North District',
    metal: 'Lead',
    level: 4.8,
    threshold: 2.0,
    timestamp: '2024-12-19T14:00:00Z',
    description: 'Lead levels spiked to dangerous levels near industrial zone',
    source: 'Automated Sensor Network',
    affected: 12500
  },
  {
    id: 2,
    severity: 'warning',
    region: 'East District',
    metal: 'Mercury',
    level: 1.8,
    threshold: 1.0,
    timestamp: '2024-12-19T13:30:00Z',
    description: 'Mercury contamination detected in water supply',
    source: 'Field Testing Team',
    affected: 8200
  },
  {
    id: 3,
    severity: 'moderate',
    region: 'South District',
    metal: 'Cadmium',
    level: 0.9,
    threshold: 0.5,
    timestamp: '2024-12-19T12:45:00Z',
    description: 'Elevated cadmium levels following heavy rainfall',
    source: 'Satellite Analysis',
    affected: 5600
  },
  {
    id: 4,
    severity: 'critical',
    region: 'West District',
    metal: 'Arsenic',
    level: 3.2,
    threshold: 1.5,
    timestamp: '2024-12-19T11:20:00Z',
    description: 'Arsenic contamination from mining runoff detected',
    source: 'Drone Survey',
    affected: 15800
  }
];

// Timeline data showing contamination spikes with weather correlation
const timelineData = [
  { 
    time: '06:00', 
    contamination: 1.2, 
    weather: 'Clear', 
    industrial: 2.1,
    rainfall: 0 
  },
  { 
    time: '08:00', 
    contamination: 1.5, 
    weather: 'Clear', 
    industrial: 2.8,
    rainfall: 0 
  },
  { 
    time: '10:00', 
    contamination: 2.1, 
    weather: 'Cloudy', 
    industrial: 3.2,
    rainfall: 2 
  },
  { 
    time: '12:00', 
    contamination: 3.8, 
    weather: 'Rain', 
    industrial: 3.5,
    rainfall: 15 
  },
  { 
    time: '14:00', 
    contamination: 4.8, 
    weather: 'Heavy Rain', 
    industrial: 4.1,
    rainfall: 28 
  },
  { 
    time: '16:00', 
    contamination: 3.2, 
    weather: 'Light Rain', 
    industrial: 3.8,
    rainfall: 8 
  },
  { 
    time: '18:00', 
    contamination: 2.1, 
    weather: 'Clearing', 
    industrial: 3.2,
    rainfall: 2 
  }
];

// Regional risk zones
const riskZones = [
  { region: 'North District', risk: 'critical', color: '#dc2626', incidents: 3, population: 125000 },
  { region: 'East District', risk: 'warning', color: '#ea580c', incidents: 2, population: 89000 },
  { region: 'South District', risk: 'moderate', color: '#eab308', incidents: 1, population: 67000 },
  { region: 'West District', risk: 'critical', color: '#dc2626', incidents: 4, population: 158000 },
  { region: 'Central District', risk: 'safe', color: '#16a34a', incidents: 0, population: 95000 }
];

interface RiskAlertsProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
}

export function RiskAlerts({ onNavigateToHome, onNavigateToDashboard }: RiskAlertsProps) {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedMetal, setSelectedMetal] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertOctagon className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'moderate':
        return <Shield className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const filteredAlerts = alertsData.filter(alert => {
    const matchesSeverity = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const matchesRegion = selectedRegion === 'all' || alert.region === selectedRegion;
    const matchesMetal = selectedMetal === 'all' || alert.metal === selectedMetal;
    const matchesSearch = searchTerm === '' || 
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.metal.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSeverity && matchesRegion && matchesMetal && matchesSearch;
  });

  const latestCriticalAlert = alertsData.find(alert => alert.severity === 'critical');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-red-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl text-slate-800">Risk Alerts</span>
            </div>
            
            <nav className="flex space-x-8">
              <button 
                onClick={onNavigateToHome}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={onNavigateToDashboard}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </button>
              <a href="#" className="text-red-600 border-b-2 border-red-600 pb-1">Risk Alerts</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Check Water Safety</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Reports</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contribute Data</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert Summary Banner */}
        {latestCriticalAlert && (
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-500 rounded-full">
                      <AlertOctagon className="h-8 w-8 text-white animate-pulse" />
                    </div>
                    <div>
                      <h2 className="text-2xl text-red-800 mb-2">CRITICAL CONTAMINATION ALERT</h2>
                      <p className="text-red-700 mb-2">{latestCriticalAlert.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-red-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {latestCriticalAlert.region}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {new Date(latestCriticalAlert.timestamp).toLocaleTimeString()}
                        </span>
                        <span className="flex items-center">
                          <Droplets className="h-4 w-4 mr-1" />
                          {latestCriticalAlert.metal}: {latestCriticalAlert.level}mg/L
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Notify Authorities
                    </Button>
                    <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                      <FileText className="h-4 w-4 mr-2" />
                      View Actions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filter Controls */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-blue-500" />
                Filter Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Search alerts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="North District">North District</SelectItem>
                    <SelectItem value="East District">East District</SelectItem>
                    <SelectItem value="South District">South District</SelectItem>
                    <SelectItem value="West District">West District</SelectItem>
                    <SelectItem value="Central District">Central District</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                  <SelectTrigger>
                    <SelectValue placeholder="Metal Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Metals</SelectItem>
                    <SelectItem value="Lead">Lead</SelectItem>
                    <SelectItem value="Mercury">Mercury</SelectItem>
                    <SelectItem value="Cadmium">Cadmium</SelectItem>
                    <SelectItem value="Arsenic">Arsenic</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedSeverity('all');
                    setSelectedRegion('all');
                    setSelectedMetal('all');
                    setSearchTerm('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Map View */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                Regional Risk Map
              </CardTitle>
              <p className="text-sm text-muted-foreground">Color-coded contamination zones across the region</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskZones.map((zone, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer border-l-4"
                    style={{ borderLeftColor: zone.color }}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: zone.color }}
                      ></div>
                      <div>
                        <div className="text-sm">{zone.region}</div>
                        <div className="text-xs text-muted-foreground">
                          Population: {zone.population.toLocaleString()} | Active Incidents: {zone.incidents}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      className={`${zone.risk === 'critical' ? 'bg-red-100 text-red-800' : 
                                   zone.risk === 'warning' ? 'bg-orange-100 text-orange-800' : 
                                   zone.risk === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                                   'bg-green-100 text-green-800'}`}
                    >
                      {zone.risk.charAt(0).toUpperCase() + zone.risk.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Critical Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Warning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Safe</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Emergency Actions</CardTitle>
              <p className="text-sm text-muted-foreground">Immediate response options</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Notify Local Authority
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Bell className="h-4 w-4 mr-2" />
                Send Public Alert
              </Button>
              <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                <FileText className="h-4 w-4 mr-2" />
                View Recommended Actions
              </Button>
              <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                <Droplets className="h-4 w-4 mr-2" />
                Alternative Water Sources
              </Button>
              
              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm mb-2">Emergency Contacts</h4>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>• EPA Hotline: 1-800-EPA-SAFE</div>
                  <div>• Local Health Dept: (555) 123-4567</div>
                  <div>• Emergency Services: 911</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Graph */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
              Contamination Timeline & Environmental Correlations
            </CardTitle>
            <p className="text-sm text-muted-foreground">24-hour contamination trends with weather and industrial activity correlation</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorContamination" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorIndustrial" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ea580c" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorRainfall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value, name) => {
                    const labels = {
                      contamination: 'Contamination Level (mg/L)',
                      industrial: 'Industrial Activity',
                      rainfall: 'Rainfall (mm)'
                    };
                    return [value, labels[name as keyof typeof labels] || name];
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="contamination"
                  stroke="#dc2626"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorContamination)"
                />
                <Area
                  type="monotone"
                  dataKey="industrial"
                  stroke="#ea580c"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorIndustrial)"
                />
                <Area
                  type="monotone"
                  dataKey="rainfall"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRainfall)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Contamination Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Industrial Activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Rainfall</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-orange-500" />
                Active Alerts ({filteredAlerts.length})
              </span>
              <Badge className="bg-red-100 text-red-800">
                {alertsData.filter(a => a.severity === 'critical').length} Critical
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 rounded-lg border-l-4 hover:shadow-md transition-shadow cursor-pointer ${
                    alert.severity === 'critical' ? 'bg-red-50 border-l-red-500' :
                    alert.severity === 'warning' ? 'bg-orange-50 border-l-orange-500' :
                    'bg-yellow-50 border-l-yellow-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {getSeverityIcon(alert.severity)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {alert.metal} • {alert.region}
                          </span>
                        </div>
                        <p className="text-sm mb-2">{alert.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {new Date(alert.timestamp).toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Droplets className="h-3 w-3 mr-1" />
                            Level: {alert.level}mg/L (Threshold: {alert.threshold}mg/L)
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {alert.affected.toLocaleString()} people affected
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button 
                        size="sm" 
                        className={`${alert.severity === 'critical' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700'} text-white`}
                      >
                        <Zap className="h-3 w-3 mr-1" />
                        Respond
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
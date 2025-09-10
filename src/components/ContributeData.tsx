import { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ChatbotWidget } from "./ChatbotWidget";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Upload, 
  MapPin, 
  FileText, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Camera,
  FileSpreadsheet,
  Shield,
  Droplet,
  Zap,
  Star
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ContributeDataProps {
  onNavigateToHome: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToRiskAlerts: () => void;
  onNavigateToCheckWaterSafety: () => void;
  onNavigateToReports: () => void;
}

// Mock leaderboard data
const mockLeaderboard = [
  { rank: 1, name: "Dr. Sarah Chen", organization: "EcoWatch NGO", contributions: 156, badge: "Platinum Guardian", points: 2340 },
  { rank: 2, name: "Mumbai Water Authority", organization: "Government", contributions: 142, badge: "Gold Protector", points: 2130 },
  { rank: 3, name: "Alex Rodriguez", organization: "Community Volunteer", contributions: 98, badge: "Silver Champion", points: 1470 },
  { rank: 4, name: "Delhi Research Institute", organization: "Research", contributions: 87, badge: "Bronze Expert", points: 1305 },
  { rank: 5, name: "GreenWater Foundation", organization: "NGO", contributions: 73, badge: "Bronze Expert", points: 1095 }
];

// Mock community data points for the map
const mockDataPoints = [
  { id: 1, lat: 28.6139, lng: 77.2090, city: "Delhi", status: "safe", contributor: "Delhi Research Institute" },
  { id: 2, lat: 19.0760, lng: 72.8777, city: "Mumbai", status: "warning", contributor: "Mumbai Water Authority" },
  { id: 3, lat: 13.0827, lng: 80.2707, city: "Chennai", status: "safe", contributor: "Community Volunteer" },
  { id: 4, lat: 22.5726, lng: 88.3639, city: "Kolkata", status: "danger", contributor: "EcoWatch NGO" },
  { id: 5, lat: 12.9716, lng: 77.5946, city: "Bangalore", status: "safe", contributor: "Tech for Good" }
];

export function ContributeData({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToRiskAlerts,
  onNavigateToCheckWaterSafety,
  onNavigateToReports
}: ContributeDataProps) {
  const [formData, setFormData] = useState({
    location: "",
    pincode: "",
    uploadMethod: "file", // "file" or "manual"
    file: null as File | null,
    ph: "",
    lead: "",
    arsenic: "",
    mercury: "",
    chlorine: "",
    bacteria: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Thank you for contributing! Your data helps protect communities.");
    
    // Reset form
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        location: "",
        pincode: "",
        uploadMethod: "file",
        file: null,
        ph: "",
        lead: "",
        arsenic: "",
        mercury: "",
        chlorine: "",
        bacteria: "",
        notes: ""
      });
    }, 3000);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Platinum Guardian": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Gold Protector": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Silver Champion": return "bg-gray-100 text-gray-800 border-gray-200";
      case "Bronze Expert": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "bg-green-500";
      case "warning": return "bg-yellow-500";
      case "danger": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation 
        onNavigateToHome={onNavigateToHome}
        onNavigateToDashboard={onNavigateToDashboard}
        onNavigateToRiskAlerts={onNavigateToRiskAlerts}
        onNavigateToCheckWaterSafety={onNavigateToCheckWaterSafety}
        onNavigateToReports={onNavigateToReports}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
                Contribute Your <span className="text-blue-600">Water Test Data</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Help build the world's largest community-driven water quality database. 
                Your contributions directly impact public health and environmental protection 
                by enabling AI-powered insights for safer communities.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Secure & Anonymous</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Community Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>Earn Recognition</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 p-8">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRlc3RpbmclMjBsYWJvcmF0b3J5JTIwc2NpZW50aXN0fGVufDF8fHx8MTc1NzQzMzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Water testing laboratory"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Upload Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Upload className="w-6 h-6 text-blue-600" />
                  Submit Water Test Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Location Section */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        Location/City
                      </Label>
                      <Select value={formData.location} onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="kolkata">Kolkata</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input 
                        id="pincode"
                        placeholder="Enter PIN code"
                        value={formData.pincode}
                        onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Upload Method Selection */}
                  <div className="space-y-4">
                    <Label>How would you like to submit your data?</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, uploadMethod: "file" }))}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.uploadMethod === "file" 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div className="text-left">
                            <div className="font-medium">Upload File</div>
                            <div className="text-sm text-gray-500">PDF, CSV, or Image</div>
                          </div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, uploadMethod: "manual" }))}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.uploadMethod === "manual" 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-green-600" />
                          <div className="text-left">
                            <div className="font-medium">Manual Entry</div>
                            <div className="text-sm text-gray-500">Type values directly</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* File Upload */}
                  {formData.uploadMethod === "file" && (
                    <div className="space-y-2">
                      <Label htmlFor="file">Upload Test Results</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          id="file"
                          accept=".pdf,.csv,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <label htmlFor="file" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2">
                            {formData.file ? (
                              <>
                                <CheckCircle className="w-8 h-8 text-green-600" />
                                <p className="text-sm font-medium">{formData.file.name}</p>
                                <p className="text-xs text-gray-500">Click to change file</p>
                              </>
                            ) : (
                              <>
                                <div className="flex gap-2">
                                  <FileText className="w-6 h-6 text-blue-600" />
                                  <FileSpreadsheet className="w-6 h-6 text-green-600" />
                                  <Camera className="w-6 h-6 text-purple-600" />
                                </div>
                                <p className="text-sm font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500">PDF, CSV, JPG, PNG up to 10MB</p>
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Manual Entry */}
                  {formData.uploadMethod === "manual" && (
                    <div className="space-y-4">
                      <Label>Water Quality Parameters</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ph">pH Level</Label>
                          <Input 
                            id="ph"
                            placeholder="e.g., 7.2"
                            value={formData.ph}
                            onChange={(e) => setFormData(prev => ({ ...prev, ph: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lead">Lead (mg/L)</Label>
                          <Input 
                            id="lead"
                            placeholder="e.g., 0.005"
                            value={formData.lead}
                            onChange={(e) => setFormData(prev => ({ ...prev, lead: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="arsenic">Arsenic (mg/L)</Label>
                          <Input 
                            id="arsenic"
                            placeholder="e.g., 0.001"
                            value={formData.arsenic}
                            onChange={(e) => setFormData(prev => ({ ...prev, arsenic: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mercury">Mercury (mg/L)</Label>
                          <Input 
                            id="mercury"
                            placeholder="e.g., 0.0001"
                            value={formData.mercury}
                            onChange={(e) => setFormData(prev => ({ ...prev, mercury: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="chlorine">Chlorine (mg/L)</Label>
                          <Input 
                            id="chlorine"
                            placeholder="e.g., 0.5"
                            value={formData.chlorine}
                            onChange={(e) => setFormData(prev => ({ ...prev, chlorine: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bacteria">Bacteria Count</Label>
                          <Input 
                            id="bacteria"
                            placeholder="e.g., <1 CFU/100ml"
                            value={formData.bacteria}
                            onChange={(e) => setFormData(prev => ({ ...prev, bacteria: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea 
                      id="notes"
                      placeholder="Any additional information about the water source, testing conditions, or observations..."
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-6"
                    disabled={isSubmitting || submitted}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : submitted ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Successfully Submitted!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        Submit Water Data
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Guidelines Card */}
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  Data Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Accepted File Formats</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Laboratory reports (PDF)</li>
                      <li>• Data spreadsheets (CSV)</li>
                      <li>• Test result photos (JPG, PNG)</li>
                      <li>• Government test certificates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Quality Standards</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use certified testing methods</li>
                      <li>• Include collection date/time</li>
                      <li>• Specify exact location</li>
                      <li>• Clear, readable documentation</li>
                    </ul>
                  </div>
                </div>
                <Separator />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Privacy Notice:</strong> All submissions are anonymized and used solely for 
                    water quality analysis. Personal information is never shared or stored.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockLeaderboard.map((contributor) => (
                  <div key={contributor.rank} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <div className="flex-shrink-0">
                      {contributor.rank === 1 && <Star className="w-5 h-5 text-yellow-500" />}
                      {contributor.rank === 2 && <Star className="w-5 h-5 text-gray-400" />}
                      {contributor.rank === 3 && <Star className="w-5 h-5 text-orange-500" />}
                      {contributor.rank > 3 && (
                        <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                          {contributor.rank}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.organization}</p>
                      <Badge className={`text-xs mt-1 ${getBadgeColor(contributor.badge)}`}>
                        {contributor.badge}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{contributor.contributions}</p>
                      <p className="text-xs text-gray-500">submissions</p>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Join 2,340+ active contributors</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Impact Map */}
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Community Data Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {mockDataPoints.map((point) => (
                      <div key={point.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(point.status)}`} />
                        <span className="text-xs font-medium">{point.city}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Data Points</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="font-medium text-green-600">+89</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500 text-center">
                    75% coverage across major cities
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Droplet className="w-6 h-6 text-blue-600" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">23</div>
                  <div className="text-sm text-gray-600">Communities helped</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">5</div>
                    <div className="text-xs text-gray-600">Submissions</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">156</div>
                    <div className="text-xs text-gray-600">Points Earned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}
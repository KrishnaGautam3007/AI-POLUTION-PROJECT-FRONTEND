import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Eye, Users, Zap, TrendingUp, Globe } from "lucide-react";

export function ImpactSection() {
  const stats = [
    { value: "2.3M", label: "People Protected", icon: Shield, color: "text-green-600" },
    { value: "98.7%", label: "Accuracy Rate", icon: Eye, color: "text-blue-600" },
    { value: "150+", label: "Regions Monitored", icon: Globe, color: "text-purple-600" },
    { value: "24/7", label: "Real-time Monitoring", icon: Zap, color: "text-orange-600" }
  ];

  const benefits = [
    {
      title: "Public Health Protection",
      description: "Early detection and prevention of heavy metal contamination protects communities from health risks",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "Real-time Insights",
      description: "Continuous monitoring provides up-to-the-minute data for immediate response to contamination events",
      icon: TrendingUp,
      color: "bg-blue-500"
    },
    {
      title: "Decision-making Support",
      description: "AI-powered analytics help policymakers and environmental agencies make informed decisions",
      icon: Users,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Impact & Benefits</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-slate-800">
            Making a Real Difference in Environmental Protection
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI-powered system has transformed water quality monitoring, providing unprecedented insights and protection for communities worldwide.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl mb-2 text-slate-800">{stat.value}</div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl mb-4 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">12</div>
              <p className="text-blue-100">Countries Using System</p>
            </div>
            <div>
              <div className="text-3xl mb-2">95%</div>
              <p className="text-blue-100">Faster Detection</p>
            </div>
            <div>
              <div className="text-3xl mb-2">$50M</div>
              <p className="text-blue-100">Healthcare Costs Saved</p>
            </div>
            <div>
              <div className="text-3xl mb-2">24hrs</div>
              <p className="text-blue-100">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
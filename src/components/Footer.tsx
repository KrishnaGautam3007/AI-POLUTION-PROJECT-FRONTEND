import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">H</span>
              </div>
              <span className="text-xl text-white">HMPI System</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              AI-powered heavy metal pollution monitoring for safer water and healthier communities worldwide.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#dashboard" className="text-slate-300 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#alerts" className="text-slate-300 hover:text-white transition-colors">Risk Alerts</a></li>
              <li><a href="#reports" className="text-slate-300 hover:text-white transition-colors">Reports</a></li>
              <li><a href="#contribute" className="text-slate-300 hover:text-white transition-colors">Contribute Data</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">User Guide</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">contact@hmpisystem.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Environmental Tech Center<br />123 Green Street, Eco City</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Partnership Logos */}
        <div className="mb-8">
          <h4 className="text-center text-slate-400 mb-6">Trusted by Leading Organizations</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">WHO</span>
            </div>
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">UNESCO</span>
            </div>
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">EPA</span>
            </div>
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">Greenpeace</span>
            </div>
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">WWF</span>
            </div>
            <div className="bg-white rounded px-4 py-2">
              <span className="text-slate-800">UNEP</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-400">
          <p>&copy; 2024 HMPI System. All rights reserved. Protecting water quality through AI innovation.</p>
        </div>
      </div>
    </footer>
  );
}
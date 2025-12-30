// Header (dark transparent with orange highlights)
'use client';

import React, { useState } from 'react';
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-2xl font-bold text-white">MetaSleuth</span>
            </div>
            <div className="hidden lg:block text-sm text-gray-400 pl-3 border-l border-zinc-700">
              Crypto Tracking and Investigation Platform
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-amber-600 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-amber-600 transition-colors text-sm font-medium">
              Use Cases
            </a>
            <a href="#tools" className="text-gray-300 hover:text-amber-600 transition-colors text-sm font-medium">
              Tools
            </a>
            <a href="#api" className="text-gray-300 hover:text-amber-600 transition-colors text-sm font-medium">
              API
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-amber-600 transition-colors text-sm font-medium">
              Pricing
            </a>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-white hover:text-amber-600 transition-colors text-sm font-medium">
              Sign in
            </button>
            <Button variant="primary" className="text-sm">
              Sign up
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-amber-600 transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-amber-600 transition-colors">Use Cases</a>
              <a href="#tools" className="text-gray-300 hover:text-amber-600 transition-colors">Tools</a>
              <a href="#api" className="text-gray-300 hover:text-amber-600 transition-colors">API</a>
              <a href="#pricing" className="text-gray-300 hover:text-amber-600 transition-colors">Pricing</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
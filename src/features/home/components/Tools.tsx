'use client';

import Card from "@/components/ui/Card";
import React, { useState } from 'react';


const Tools = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tools = [
    { 
      title: "Customizable Canvas", 
      description: "Customize everything on the canvas to suit your preferences and enhance clarity with memos and labels for comprehensive information.",
      content: "Create a personalized investigation workspace with flexible layouts, annotations, and visual markers."
    },
    { 
      title: "Sharing and Collaboration", 
      description: "Add watermarks and share investigation results via secure links, enabling seamless team collaboration.",
      content: "Work together with your team in real-time, share findings, and maintain investigation integrity."
    },
    { 
      title: "Batch Import and Export", 
      description: "Import and export addresses and transactions seamlessly in bulk, streamlining your workflow.",
      content: "Handle large datasets efficiently with CSV imports, bulk processing, and comprehensive export options."
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-black via-stone-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Professional-Grade Tools </span>
          <span className="text-amber-500">for Experts</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Advanced features designed for professional investigators and compliance teams.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {tools.map((tool, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                  : 'bg-transparent border-2 border-zinc-700 text-gray-300 hover:border-amber-600 hover:text-amber-500'
              }`}
            >
              {tool.title}
            </button>
          ))}
        </div>
        
        {/* Content Display */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-12 border border-zinc-800 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-amber-500">{tools[activeTab].title.split(' ')[0]}</span>
              <span className="text-white"> {tools[activeTab].title.split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {tools[activeTab].description}
            </p>
          </div>
          
          {/* Placeholder for tool visualization */}
          <div className="aspect-video bg-stone-900 rounded-xl flex items-center justify-center border border-zinc-700">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🛠️</div>
              <p className="text-lg">{tools[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
// features/home/components/API.tsx
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const API = () => {
  return (
    <section id="api" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 md:p-12 border border-zinc-800 shadow-2xl">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Risk Score and Address Labels API
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Enhance your product's compliance integration with our leading compliance scoring and address labeling API.
          </p>
          
          {/* API Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Address Labels API */}
            <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-zinc-700 hover:border-amber-600 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    Address Labels API
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Query from over 300M labels and entities with ease.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Risk Score API */}
            <div className="bg-black bg-opacity-50 rounded-xl p-6 border border-zinc-700 hover:border-amber-600 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    Risk Score API
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Thoroughly screen addresses for compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              API Pricing Plans
            </Button>
            <Button variant="secondary">
              API Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default API;
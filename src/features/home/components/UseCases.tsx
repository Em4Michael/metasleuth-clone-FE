import Card from "@/components/ui/Card";

const UseCases = () => {
  const cases = [
    {
      title: "DYOR (Do Your Own Research)",
      description: "Engage in comprehensive research before investing in Altcoins.",
      icon: "📚"
    },
    {
      title: "Compliance Measures",
      description: "Detect illicit activities, mitigate risks, and ensure full AML/CFT compliance with Phalcon Compliance.",
      icon: "🚀"
    },
    {
      title: "Stolen Funds Tracking",
      description: "Track funds in case of phishing, scams, or compromised private keys. Get immediate help.",
      icon: "👛"
    },
    {
      title: "Forensics Analysis",
      description: "In-depth investigation and forensic analysis capabilities.",
      icon: "🔍"
    }
  ];

  const labels = [
    { name: 'Terrorist Financing', highlight: false },
    { name: 'Scam', highlight: true },
    { name: 'Hot Wallet', highlight: false },
    { name: 'Honeypot', highlight: true },
    { name: 'Mixer', highlight: false },
    { name: 'Sanctioned', highlight: false },
    { name: 'Wallet', highlight: false },
    { name: 'Deposit Address', highlight: false },
    { name: 'DEX', highlight: true },
    { name: 'Ransomware', highlight: false },
    { name: 'Bridge', highlight: false },
    { name: 'CEX', highlight: false },
    { name: 'Whale', highlight: false },
    { name: 'Hacker', highlight: false },
    { name: 'Payment Processor', highlight: false },
    { name: 'Mining Pool', highlight: true },
    { name: 'Infrastructure', highlight: false }
  ];

  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">Primary </span>
          <span className="text-amber-500">Application Scenarios</span>
        </h2>
        
        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {cases.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
        
        {/* Address Labels Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Over </span>
            <span className="text-amber-500">400M</span>
            <span className="text-white"> Address Labels</span>
          </h3>
          <p className="text-xl md:text-2xl text-gray-400">Easy Tracking for Everyone</p>
        </div>
        
        {/* Label Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {labels.map((label, idx) => (
            <div 
              key={idx} 
              className={`px-6 py-3 rounded-full border text-sm font-medium transition-all cursor-pointer ${
                label.highlight
                  ? 'bg-amber-700 border-amber-600 text-white hover:bg-amber-600'
                  : 'border-zinc-700 text-gray-300 hover:border-amber-600 hover:text-amber-500'
              }`}
            >
              {label.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default UseCases;
import Button from "@/components/ui/Button";


const TrustedPartners = () => {
  const partners = [
    { name: "Bitquery", logo: "🔷" },
    { name: "Blockscout", logo: "🔍" },
    { name: "OKLINK", logo: "⛓️" },
    { name: "RSS3", logo: "📡" },
    { name: "AMBER", logo: "🟡" },
    { name: "BYBIT", logo: "⚡" },
    { name: "imToken", logo: "💙" },
    { name: "60PLUS", logo: "➕" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Trusted by </span>
          <span className="text-amber-500">the Best in Web3</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12">
          Leading companies and platforms rely on MetaSleuth
        </p>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center justify-center hover:border-amber-600 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <div className="text-white font-semibold text-lg group-hover:text-amber-500 transition-colors">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empowering Crypto Investigation With MetaSleuth
          </h2>
          <p className="text-xl text-amber-100">
            MetaSleuth simplifies investigations for everyone, offering professional-grade tools tailored to meet the needs of experts.
          </p>
          <Button variant="primary" className="mt-8 bg-white text-amber-900 hover:bg-gray-100">
            Get Started for Free →
          </Button>
        </div>
      </div>
    </section>
  );
};


export default TrustedPartners;
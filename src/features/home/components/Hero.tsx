// Hero section (matches the main landing style)
import Button from "@/components/ui/Button";

const Hero = () => {
  const blockchains = [
    { name: "Bitcoin", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032" },
    { name: "BSC", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=032" },
    { name: "TRON", logo: "https://cryptologos.cc/logos/tron-trx-logo.png?v=032" },
    { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032" },
    { name: "Arbitrum", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=032" },
    { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=032" },
    { name: "Optimism", logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=032" },
    { name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=032" },
    { name: "Base", logo: "https://cryptologos.cc/logos/base-protocol-base-logo.png?v=032" },
    { name: "Fantom", logo: "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=032" },
    { name: "Cronos", logo: "https://cryptologos.cc/logos/cronos-cro-logo.png?v=032" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-stone-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-amber-500">Crypto Tracking</span>
          <span className="text-white"> and</span>
          <br />
          <span className="text-amber-400">Investigation Platform</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-full px-6 py-4 border border-zinc-700">
            <input
              type="text"
              placeholder="Search for addresses, transactions, or domain names..."
              className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {blockchains.map((chain, idx) => (
            <div key={idx} className="w-10 h-10 bg-white rounded-full p-1.5 hover:scale-110 transition-transform">
              <img src={chain.logo} alt={chain.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Hero;
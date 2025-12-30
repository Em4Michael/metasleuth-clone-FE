// Testimonials (speech bubble style like in screenshots)
import Button from "@/components/ui/Button";


const Testimonials = () => {
  const testimonials = [
    { 
      user: "ZachXBT", 
      text: "MetaSleuth has an amazing UI/UX for tracking crypto funds.",
      avatar: "👤"
    },
    { 
      user: "CryptoAsh", 
      text: "Easy to use and great visualizations.",
      avatar: "👤"
    },
    { 
      user: "Rubylawn", 
      text: "Free access and deep insights.",
      avatar: "👤"
    },
    { 
      user: "Block Zero Consulting", 
      text: "New updates are amazing. Way to go guys. Great crypto forensics platform.",
      avatar: "👤"
    },
    { 
      user: "DeFi Antivirus Web3", 
      text: "Great tool to visualize on-chain movement. It's great to know that you're open to further communication. Keep up the excellent work!",
      avatar: "👤"
    },
    { 
      user: "David.Sheek.xbt", 
      text: "The UI/UX is fire 🔥",
      avatar: "👤"
    },
    { 
      user: "BIG WHALE", 
      text: "Finally, MetaSleuth is a comprehensive platform that provides insights and analytics on various blockchain protocols.",
      avatar: "👤"
    },
    { 
      user: "banda", 
      text: "Going to save me so much time looking through internal transfers on etherscan and outbound txs.",
      avatar: "👤"
    },
    { 
      user: "0xThanos", 
      text: "Super-curious to know your suggestions",
      avatar: "👤"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-stone-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Hear </span>
          <span className="text-amber-500">from our users</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12">
          Trusted by investigators, analysts, and crypto enthusiasts worldwide
        </p>
        
        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/10 transition-all duration-300 group"
            >
              <p className="text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <p className="text-amber-500 font-medium group-hover:text-amber-400 transition-colors">
                  @{t.user}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="text-center mt-12">
          <Button variant="secondary">
            See More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
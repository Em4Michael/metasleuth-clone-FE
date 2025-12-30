// features/home/components/Features.tsx (similar improvements for others)
import Card from "@/components/ui/Card";

const Features = () => {
  const features = [
    {
      title: "Highlight Major Interactions Intelligently",
      description: "Prioritizes important interactions using address labels, compliance scores, and funding relationships. Keep it straightforward and focused.",
    },
    {
      title: "Uncover Hidden Paths Automatically",
      description: "Effortlessly explores paths to key nodes, including CEX and Mixer, revealing crucial clues and invaluable evidence to enhance your investigation with ease.",
    },
    {
      title: "Effortlessly Cross-chain Investigation",
      description: "Track funds across different blockchains with a single click. Enjoy a clear and intuitive visualization on one graph.",
    },
    {
      title: "Real-time Monitoring and Alerts",
      description: "Stay informed about address fund movements in real-time. Set customizable monitoring rules to focus on events that matter to you and receive instant alerts.",
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Easy Tracking </span>
          <span className="text-amber-500">for Everyone</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Powerful features designed to make crypto investigation accessible and efficient for all users.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, idx) => (
            <Card key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
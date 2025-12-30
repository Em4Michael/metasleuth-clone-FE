import Button from "@/components/ui/Button";

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


export default CTASection;